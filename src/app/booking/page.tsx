import type { Metadata } from "next";
import Image from "next/image";
import { FormCard } from "@/components/form-card";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Free Call",
  description: "Book your free 30-minute fitness consultation with Satya Fitness.",
};

export default function BookingPage() {
  return (
    <>
      <section className="section-space">
        <div className="mx-auto w-full max-w-6xl space-y-6">
          <p className="label-kicker">Booking</p>
          <h1 className="font-[var(--font-barlow)] text-5xl font-extrabold uppercase leading-[0.95] md:text-7xl">
            Book Your Free Fitness Consultation
          </h1>
          <p className="max-w-3xl text-lg text-[#4f584f]">
            Let&apos;s build a simple, sustainable plan for your fitness goals in a focused 30-minute call.
          </p>
          <div className="surface-card relative h-64 overflow-hidden md:h-80">
            <Image
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1600&q=80"
              alt="Consultation fitness planning"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/25" />
            <p className="absolute bottom-5 left-5 max-w-md text-sm font-semibold text-white md:text-base">
              A focused call to map your training, nutrition, and weekly execution plan.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="mx-auto grid w-full max-w-6xl gap-4 md:grid-cols-2">
          <div className="surface-card p-6">
            <h2 className="font-[var(--font-barlow)] text-3xl font-extrabold uppercase">What You&apos;ll Get</h2>
            <ul className="mt-4 space-y-2 text-sm text-[#2a322a]">
              <li>• Personalized fitness roadmap</li>
              <li>• Diet guidance based on your lifestyle</li>
              <li>• Training structure for your schedule</li>
              <li>• Clear next steps</li>
            </ul>
          </div>
          <div className="surface-card p-6">
            <h2 className="font-[var(--font-barlow)] text-3xl font-extrabold uppercase">Who This Is For</h2>
            <ul className="mt-4 space-y-2 text-sm text-[#2a322a]">
              <li>• Busy professionals</li>
              <li>• People struggling with fat loss</li>
              <li>• People who want a realistic plan</li>
            </ul>
            <h3 className="mt-6 font-[var(--font-barlow)] text-2xl font-extrabold uppercase">Who This Is Not For</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#2a322a]">
              <li>• People looking for quick fixes</li>
              <li>• People not willing to stay consistent</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="mx-auto w-full max-w-6xl space-y-5">
          <SectionHeading
            kicker="Calendly"
            title="Choose A Time That Works"
            subtitle="Embed is ready. Replace with your live Calendly URL in env config when available."
          />
          <div className="surface-card overflow-hidden p-3 md:p-4">
            <div className="relative h-[700px] w-full overflow-hidden rounded-xl border border-[#d8ddd7]">
              <iframe
                src={siteConfig.calendlyUrl}
                title="Book consultation"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
            <p className="mt-3 text-xs text-[#5f665f]">
              If the scheduler does not load, open it directly:
              <a href={siteConfig.calendlyUrl} target="_blank" rel="noreferrer" className="ml-1 font-semibold underline">
                Open Calendly
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="mx-auto w-full max-w-6xl grid gap-8 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-3">
            <h2 className="font-[var(--font-barlow)] text-4xl font-extrabold uppercase">Pre-Qualification Form</h2>
            <p className="text-sm text-[#5f665f]">
              Submit this before your call so we can focus on strategy during the consultation.
            </p>
          </div>
          <FormCard
            action={siteConfig.forms.bookingApply}
            title="Consultation Intake"
            description="This takes less than 2 minutes."
            submitLabel="Book Your Free Call Now"
            fields={[
              { name: "name", label: "Name", placeholder: "Your name" },
              { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
              { name: "current_weight", label: "Current Weight (kg)", type: "number", placeholder: "82" },
              { name: "fitness_goal", label: "Fitness Goal", placeholder: "Lose fat and build muscle" },
              {
                name: "biggest_struggle",
                label: "Biggest Struggle",
                placeholder: "Consistency, food habits, or workout structure",
              },
              {
                name: "experience_level",
                label: "Experience Level",
                type: "select",
                options: ["Beginner", "Intermediate", "Advanced"],
              },
            ]}
          />
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="mx-auto w-full max-w-6xl space-y-4">
          <h2 className="font-[var(--font-barlow)] text-4xl font-extrabold uppercase">FAQ</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <article className="surface-card p-5">
              <h3 className="text-sm font-extrabold uppercase tracking-wide">Call Duration</h3>
              <p className="mt-2 text-sm text-[#4f584f]">30 minutes</p>
            </article>
            <article className="surface-card p-5">
              <h3 className="text-sm font-extrabold uppercase tracking-wide">Is It Free?</h3>
              <p className="mt-2 text-sm text-[#4f584f]">Yes, absolutely free.</p>
            </article>
            <article className="surface-card p-5">
              <h3 className="text-sm font-extrabold uppercase tracking-wide">What Happens After?</h3>
              <p className="mt-2 text-sm text-[#4f584f]">You get clear next steps based on your goals and lifestyle.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
