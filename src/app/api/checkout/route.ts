import { NextResponse } from "next/server";
import Stripe from "stripe";
import { findBookableOption } from "@/content/services";

export const runtime = "nodejs";

function cleanValue(value: FormDataEntryValue | null) {
  return String(value ?? "").trim();
}

function truncate(value: string, maxLength: number) {
  if (value.length <= maxLength) return value;
  return value.slice(0, maxLength);
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const selection = cleanValue(formData.get("selection"));
  const fullName = cleanValue(formData.get("fullName"));
  const email = cleanValue(formData.get("email"));
  const phone = cleanValue(formData.get("phone"));
  const notes = cleanValue(formData.get("notes"));

  const [serviceId, optionId] = selection.split("::");

  const missingRequired = !serviceId || !optionId || !fullName || !email || !phone || !notes;
  if (missingRequired) {
    return NextResponse.redirect(new URL("/services?checkout=invalid", request.url), 303);
  }

  const basicEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!basicEmailPattern.test(email)) {
    return NextResponse.redirect(new URL("/services?checkout=invalid", request.url), 303);
  }

  const selected = findBookableOption(serviceId, optionId);
  if (!selected) {
    return NextResponse.redirect(new URL("/services?checkout=invalid", request.url), 303);
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.redirect(new URL("/services?checkout=not-configured", request.url), 303);
  }

  const stripe = new Stripe(secretKey);
  const origin = process.env.NEXT_PUBLIC_SITE_URL || new URL(request.url).origin;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    submit_type: "book",
    payment_method_types: ["card"],
    customer_email: email,
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "aud",
          unit_amount: selected.option.amountCents,
          product_data: {
            name: `${selected.service.name} - ${selected.option.label}`,
            description: "Satya Fitness booking payment",
          },
        },
      },
    ],
    metadata: {
      serviceId,
      optionId,
      serviceName: selected.service.name,
      optionLabel: selected.option.label,
      fullName: truncate(fullName, 120),
      email: truncate(email, 120),
      phone: truncate(phone, 60),
      notes: truncate(notes, 400),
    },
    success_url: `${origin}/services?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/services?checkout=cancelled`,
  });

  if (!session.url) {
    return NextResponse.redirect(new URL("/services?checkout=error", request.url), 303);
  }

  return NextResponse.redirect(session.url, 303);
}
