import { NextResponse } from "next/server";
import Stripe from "stripe";
import { Resend } from "resend";

export const runtime = "nodejs";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
const resendApiKey = process.env.RESEND_API_KEY;
const bookingNotificationEmail = process.env.BOOKING_NOTIFICATION_EMAIL || "fit@satya.au";
const bookingFromEmail = process.env.BOOKING_FROM_EMAIL || "Satya Fitness <onboarding@resend.dev>";

const stripe = stripeSecretKey ? new Stripe(stripeSecretKey) : null;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  if (!stripe || !stripeWebhookSecret || !resend) {
    return NextResponse.json({ error: "Webhook/email not configured" }, { status: 500 });
  }

  const signature = request.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing Stripe signature" }, { status: 400 });
  }

  const payload = await request.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(payload, signature, stripeWebhookSecret);
  } catch {
    return NextResponse.json({ error: "Invalid webhook signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const metadata = session.metadata || {};

    const serviceName = metadata.serviceName || "Unknown service";
    const optionLabel = metadata.optionLabel || "Unknown option";
    const fullName = metadata.fullName || "Not provided";
    const email = metadata.email || session.customer_details?.email || "Not provided";
    const phone = metadata.phone || session.customer_details?.phone || "Not provided";
    const notes = metadata.notes || "Not provided";
    const amount = typeof session.amount_total === "number" ? `$${(session.amount_total / 100).toFixed(2)} AUD` : "Unknown";

    await resend.emails.send({
      from: bookingFromEmail,
      to: bookingNotificationEmail,
      subject: `New booking paid: ${serviceName} (${optionLabel})`,
      html: `
        <h2>New Paid Booking</h2>
        <p><strong>Service:</strong> ${serviceName}</p>
        <p><strong>Option:</strong> ${optionLabel}</p>
        <p><strong>Amount Paid:</strong> ${amount}</p>
        <hr />
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Goal / Notes:</strong> ${notes}</p>
        <hr />
        <p><strong>Stripe Session ID:</strong> ${session.id}</p>
      `,
    });
  }

  return NextResponse.json({ received: true });
}
