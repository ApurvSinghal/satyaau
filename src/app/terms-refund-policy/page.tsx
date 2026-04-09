import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Refund Policy",
  description: "Terms, booking conditions, and refund policy for Satya Fitness services and programs.",
};

const policySections = [
  {
    title: "Bookings",
    body: "All services booked through the Satya Fitness website are subject to availability. A booking is considered confirmed only after successful payment and any follow-up scheduling communication required to lock in time, location, or program start.",
  },
  {
    title: "Session And Program Delivery",
    body: "Service delivery may vary by format, including Personal Training, Bootcamp, and Work Out With Me sessions. Specific scheduling, council-gym location details, and operational requirements may be confirmed after purchase.",
  },
  {
    title: "Refunds",
    body: "Refund requests are assessed case by case. Where a session or program has already commenced, partial or full refunds may not be available. If Satya Fitness is unable to deliver a booked service, an alternative arrangement, credit, or refund may be offered where appropriate.",
  },
  {
    title: "Cancellations And Rescheduling",
    body: "Clients should provide as much notice as possible for any scheduling change. Repeated late cancellations or missed sessions may result in forfeited bookings depending on the service type and scheduling agreement confirmed after purchase.",
  },
  {
    title: "Health And Responsibility",
    body: "By booking a service, you confirm that you are participating voluntarily and understand the physical nature of training. You are responsible for disclosing relevant health conditions, injuries, or limitations before participation.",
  },
];

export default function TermsRefundPolicyPage() {
  return (
    <section className="section-space">
      <div className="mx-auto w-full max-w-5xl space-y-8">
        <div className="surface-card rounded-[2rem] p-8 md:p-10">
          <p className="label-kicker">Terms & Refund Policy</p>
          <h1 className="mt-3 font-[var(--font-barlow)] text-4xl font-extrabold uppercase text-[var(--ink-soft)] md:text-6xl">
            Clear Booking Conditions For A Better Client Experience
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#4f584f] md:text-base">
            These terms are here to create clarity around bookings, delivery expectations, cancellations, and payment-related questions so the coaching experience stays fair and professional for everyone.
          </p>
        </div>

        <div className="grid gap-4">
          {policySections.map((section) => (
            <article key={section.title} className="surface-card rounded-[2rem] p-6 md:p-8">
              <h2 className="font-[var(--font-barlow)] text-3xl font-extrabold uppercase text-[var(--ink-soft)]">
                {section.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#4f584f] md:text-base">{section.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
