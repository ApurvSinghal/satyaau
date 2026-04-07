import type { Metadata } from "next";
import Image from "next/image";
import { FormCard } from "@/components/form-card";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Apply for coaching with Satya Fitness.",
};

export default function ContactPage() {
  return (
    <section className="section-space">
      <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-5">
          <SectionHeading
            kicker="Contact / Apply"
            title="Tell Me Your Fitness Goal"
            subtitle="Share your current situation and I will guide you to the right next step."
          />
          <div className="surface-card relative h-72 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?auto=format&fit=crop&w=1200&q=80"
              alt="Coach helping client in gym"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="cta-secondary w-full text-center md:w-auto"
          >
            Message On Instagram
          </a>
        </div>

        <FormCard
          action={siteConfig.forms.contactApply}
          title="Apply For Coaching"
          description="Fill this in and you will hear back within 24 hours."
          submitLabel="Submit Application"
          fields={[
            { name: "name", label: "Name", placeholder: "Your full name" },
            { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
            { name: "fitness_goal", label: "Fitness Goal", placeholder: "Lose fat and build strength" },
            { name: "current_weight", label: "Current Weight (kg)", type: "number", placeholder: "78" },
            {
              name: "biggest_struggle",
              label: "Biggest Struggle",
              placeholder: "Consistency, diet confusion, time...",
            },
          ]}
        />
      </div>
    </section>
  );
}
