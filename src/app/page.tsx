import Image from "next/image";
import { CtaButton } from "@/components/cta-button";
import { FormCard } from "@/components/form-card";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

const stats = [
  { label: "Average Fat Loss", value: "-8 to -14 kg" },
  { label: "Strength Progress", value: "+30% in 12 weeks" },
  { label: "Consistency", value: "4-5 sessions/week" },
];

const whoIHelp = [
  "Busy 9-5 professionals with limited time",
  "People stuck in a cycle of inconsistency",
  "People confused by conflicting diet advice",
];

const method = [
  "Train 4-5x per week with efficient sessions",
  "Simple high-protein meals built around your routine",
  "Consistency over perfection with clear weekly targets",
];

const services = [
  "Online Coaching",
  "Custom Workout Plans",
  "Diet Plans",
];

export default function Home() {
  return (
    <>
      <section className="section-space">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-2">
          <div className="space-y-7 fade-up">
            <p className="label-kicker">Satya Fitness Coaching</p>
            <h1 className="font-[var(--font-barlow)] text-5xl font-extrabold uppercase leading-[0.95] md:text-7xl">
              Get Lean, Strong &amp; Disciplined Without Complicated Diets
            </h1>
            <p className="max-w-xl text-lg text-[#4f584f]">
              Simple fitness systems for busy professionals. Build a body you trust with routines you can
              sustain.
            </p>
            <div className="flex flex-wrap gap-3">
              <CtaButton href="/contact">Start Your Transformation</CtaButton>
              <CtaButton href="/booking" variant="secondary">
                Book Free Call
              </CtaButton>
            </div>
            <p className="text-sm font-semibold text-[#1f6f45]">Only 10 consultation spots available this month.</p>
          </div>
          <div className="surface-card fade-up stagger-1 relative h-[440px] overflow-hidden md:h-[560px]">
            <Image
              src="https://images.unsplash.com/photo-1571019613540-996a0f0ed31f?auto=format&fit=crop&w=1200&q=80"
              alt="Fitness coaching lifestyle"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <p className="absolute bottom-6 left-6 max-w-xs text-sm font-semibold text-white">
              Helping busy professionals master fitness with disciplined, realistic systems.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2">
          <article className="surface-card p-8 md:p-10">
            <p className="label-kicker">My Story</p>
            <h2 className="mt-3 font-[var(--font-barlow)] text-4xl font-extrabold uppercase leading-tight">
              From Overworked To In Control
            </h2>
            <p className="mt-4 text-[#4f584f]">
              I built this coaching system after going through the same cycle most professionals face: long workdays,
              low energy, and inconsistent training. Fitness changed when I simplified everything and focused on
              repeatable habits.
            </p>
          </article>
          <article className="surface-card p-8 md:p-10">
            <p className="label-kicker">Your Turning Point</p>
            <h2 className="mt-3 font-[var(--font-barlow)] text-4xl font-extrabold uppercase leading-tight">
              Stop Restarting Every Monday
            </h2>
            <p className="mt-4 text-[#4f584f]">
              You do not need a complicated plan. You need structure, accountability, and a coach who understands your
              schedule. This is where your consistency starts.
            </p>
          </article>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="mx-auto w-full max-w-6xl space-y-8">
          <SectionHeading
            kicker="Social Proof"
            title="Real Progress You Can See"
            subtitle="Trackable outcomes in fat loss, strength, and discipline habits."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((item, index) => (
              <div key={item.label} className={`surface-card p-6 fade-up stagger-${index + 1}`}>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#5f665f]">{item.label}</p>
                <p className="mt-2 font-[var(--font-barlow)] text-4xl font-extrabold uppercase">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="surface-card p-8">
              <p className="label-kicker">Before/After Placeholder</p>
              <p className="mt-3 font-[var(--font-barlow)] text-3xl font-extrabold uppercase">12-Week Fat Loss</p>
              <p className="mt-2 text-[#5f665f]">From inconsistent routine to visible definition and stronger lifts.</p>
            </div>
            <div className="surface-card p-8">
              <p className="label-kicker">Before/After Placeholder</p>
              <p className="mt-3 font-[var(--font-barlow)] text-3xl font-extrabold uppercase">Discipline Reset</p>
              <p className="mt-2 text-[#5f665f]">From skipping workouts to a structured weekly plan that sticks.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="mx-auto grid w-full max-w-6xl gap-4 md:grid-cols-3">
          {[
            "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=1200&q=80",
            "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1200&q=80",
          ].map((src, index) => (
            <div key={src} className="surface-card relative h-64 overflow-hidden md:h-72">
              <Image src={src} alt={`Training visual ${index + 1}`} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}
        </div>
      </section>

      <section id="who-i-help" className="section-space pt-0">
        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-2">
          <SectionHeading
            kicker="Who I Help"
            title="Coaching Built for Busy Lives"
            subtitle="You do not need perfect conditions. You need a system that works with your real schedule."
          />
          <div className="space-y-4">
            {whoIHelp.map((item) => (
              <div key={item} className="surface-card p-5 text-sm font-semibold md:text-base">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="mx-auto w-full max-w-6xl space-y-8">
          <SectionHeading
            kicker="My Method"
            title="Simple Systems. Strong Results."
            subtitle="No extreme cuts. No random workouts. Just clear structure and execution."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {method.map((item, index) => (
              <div key={item} className="surface-card p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1f6f45]">Step {index + 1}</p>
                <p className="mt-3 text-sm font-semibold text-[#2a322a] md:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="mx-auto w-full max-w-6xl space-y-8">
          <SectionHeading
            kicker="Services"
            title="Built Around Your Schedule"
            subtitle="Choose the level of support that fits your current goals."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((item) => (
              <div key={item} className="surface-card flex flex-col justify-between p-6">
                <h3 className="font-[var(--font-barlow)] text-3xl font-extrabold uppercase">{item}</h3>
                <CtaButton href="/services" variant="secondary" className="mt-6 text-xs">
                  View Plans
                </CtaButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0" id="lead-magnet">
        <div className="mx-auto w-full max-w-6xl">
          <FormCard
            action={siteConfig.forms.leadMagnet}
            title="Free 7-Day Fat Loss Plan"
            description="Get a practical 7-day structure made for busy professionals. Zero fluff."
            submitLabel="Send Me The Free Plan"
            fields={[
              { name: "name", label: "Name", placeholder: "Your name" },
              { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
            ]}
          />
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="mx-auto w-full max-w-6xl space-y-8">
          <SectionHeading
            kicker="Testimonials"
            title="What Clients Say"
            subtitle="Placeholder testimonials ready for your real client stories and proof points."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Dropped 9kg without giving up family meals.",
              "Finally followed a plan I could stick to during work travel.",
              "Got stronger and more disciplined in just 3 months.",
            ].map((quote) => (
              <blockquote key={quote} className="surface-card p-6 text-sm font-medium text-[#2a322a]">
                “{quote}”
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="mx-auto w-full max-w-6xl rounded-3xl border border-[#d8ddd7] bg-[#0f1110] px-6 py-12 text-white md:px-12">
          <p className="label-kicker text-[#8ad1a9]">Ready To Start</p>
          <h2 className="mt-4 font-[var(--font-barlow)] text-4xl font-extrabold uppercase md:text-6xl">
            Book Your Free Fitness Consultation
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-[#d7ddd7] md:text-base">
            You will leave the call with a clear plan for your training, nutrition, and consistency.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CtaButton href="/booking" className="bg-white text-black hover:bg-[#e8ece8]">
              Book Your Free Call Now
            </CtaButton>
            <CtaButton href="/contact" variant="secondary" className="border-white/30 bg-transparent text-white">
              Apply for Coaching
            </CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
