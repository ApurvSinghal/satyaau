import type { Metadata } from "next";
import Image from "next/image";
import { CtaButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Services",
  description: "Choose from Starter, Transformation, or Premium coaching plans.",
};

const plans = [
  {
    name: "Starter Plan",
    price: "$149/mo",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
    points: ["Structured workout plan", "Basic diet guidance", "Monthly progress review"],
  },
  {
    name: "Transformation Plan",
    price: "$299/mo",
    image:
      "https://images.unsplash.com/photo-1571732154690-f6d1c3e5178a?auto=format&fit=crop&w=1200&q=80",
    points: ["Custom workout plan", "Custom diet plan", "Weekly check-ins"],
    featured: true,
  },
  {
    name: "Premium Coaching",
    price: "$499/mo",
    image:
      "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=1200&q=80",
    points: ["Full coaching system", "Ongoing support", "Progress tracking + adjustments"],
  },
];

export default function ServicesPage() {
  return (
    <section className="section-space">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <div className="surface-card relative h-64 overflow-hidden md:h-80">
          <Image
            src="https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?auto=format&fit=crop&w=1600&q=80"
            alt="Strength training"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 to-black/25" />
          <div className="absolute inset-0 flex items-end p-6 md:p-8">
            <p className="max-w-lg text-sm font-semibold text-white md:text-base">
              Coaching options designed to match your current level, schedule, and goals.
            </p>
          </div>
        </div>

        <SectionHeading
          kicker="Services"
          title="Pick The Level Of Support You Need"
          subtitle="Every plan is built for realistic execution around your schedule."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`surface-card flex flex-col p-6 ${plan.featured ? "border-[#4ea973] ring-2 ring-[#4ea973]/30" : ""}`}
            >
              <div className="relative mb-4 h-44 overflow-hidden rounded-xl">
                <Image src={plan.image} alt={plan.name} fill className="object-cover" />
              </div>
              <h3 className="font-[var(--font-barlow)] text-3xl font-extrabold uppercase">{plan.name}</h3>
              <p className="mt-2 text-sm text-[#5f665f]">{plan.price}</p>
              <ul className="mt-6 space-y-2 text-sm font-medium text-[#2a322a]">
                {plan.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
              <CtaButton href="/contact" className="mt-8 w-full text-center">
                Apply Now
              </CtaButton>
            </article>
          ))}
        </div>

        <p className="text-sm font-semibold text-[#1f6f45]">Limited slots: only 5 new clients accepted monthly.</p>
      </div>
    </section>
  );
}
