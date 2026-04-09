import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Satya Fitness covering enquiries, bookings, and payment information.",
};

const privacySections = [
  {
    title: "What We Collect",
    body: "Satya Fitness may collect your name, email address, phone number, booking details, service preferences, and any notes you submit through the website when you enquire, download a resource, or complete a paid booking.",
  },
  {
    title: "How Your Information Is Used",
    body: "Your information is used to respond to enquiries, manage bookings, process payments through approved providers, deliver coaching-related communication, and improve the customer experience across Satya Fitness services.",
  },
  {
    title: "Payments And Third Parties",
    body: "Payments are processed through secure third-party providers such as Stripe. Satya Fitness does not store your full card details on this website. External providers may process your data according to their own privacy policies.",
  },
  {
    title: "Marketing And Communication",
    body: "If you choose to download a lead resource or contact Satya Fitness, you may receive follow-up communication related to services, bookings, or brand updates. You can request to stop receiving these communications at any time.",
  },
  {
    title: "Access And Removal Requests",
    body: "If you would like to review, update, or request deletion of your personal information, contact Satya Fitness directly using the email address listed on this website.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="section-space">
      <div className="mx-auto w-full max-w-5xl space-y-8">
        <div className="surface-card rounded-[2rem] p-8 md:p-10">
          <p className="label-kicker">Privacy Policy</p>
          <h1 className="mt-3 font-[var(--font-barlow)] text-4xl font-extrabold uppercase text-[var(--ink-soft)] md:text-6xl">
            Respecting Your Data While Building A Stronger Brand Experience
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#4f584f] md:text-base">
            Satya Fitness is committed to handling personal information carefully, transparently, and only where it supports enquiries, bookings, coaching delivery, and a better client experience.
          </p>
        </div>

        <div className="grid gap-4">
          {privacySections.map((section) => (
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
