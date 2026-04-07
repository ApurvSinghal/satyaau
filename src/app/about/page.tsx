import type { Metadata } from "next";
import Image from "next/image";
import { CtaButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description: "The coaching journey behind Satya Fitness from India to Australia.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section-space">
        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-2">
          <div className="space-y-5">
            <SectionHeading
              kicker="About Satya"
              title="From India To Australia, Built Through Discipline"
              subtitle="I did not become fit because I had extra time. I became fit when I committed to simple habits and stopped chasing shortcuts."
            />
            <p className="text-[#4f584f]">
              Moving countries, managing work pressure, and trying to stay healthy felt overwhelming. I kept starting
              and stopping until I learned that sustainable progress comes from structure, not motivation.
            </p>
            <p className="text-[#4f584f]">
              Today, I coach busy professionals to train hard, eat smart, and stay consistent with routines that fit
              real life.
            </p>
          </div>
          <div className="surface-card relative h-[420px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1605296867424-35fc25c9212a?auto=format&fit=crop&w=1200&q=80"
              alt="Coach training in gym"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="mx-auto w-full max-w-6xl grid gap-4 md:grid-cols-3">
          {[
            {
              title: "The Struggle",
              body: "Confusing nutrition advice, inconsistent gym routines, and all-or-nothing mindset.",
            },
            {
              title: "The Shift",
              body: "Simple training split, high-protein meals, and weekly discipline targets.",
            },
            {
              title: "The Lesson",
              body: "Fitness should support your life. If a plan is not sustainable, it will not last.",
            },
          ].map((item) => (
            <article key={item.title} className="surface-card p-6">
              <h3 className="font-[var(--font-barlow)] text-3xl font-extrabold uppercase">{item.title}</h3>
              <p className="mt-3 text-sm text-[#4f584f]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="mx-auto max-w-6xl surface-card p-8 md:p-10">
          <p className="label-kicker">Coaching Philosophy</p>
          <h2 className="mt-3 font-[var(--font-barlow)] text-4xl font-extrabold uppercase md:text-5xl">
            Simple. Sustainable. Relentless Consistency.
          </h2>
          <p className="mt-4 max-w-3xl text-[#4f584f]">
            My coaching removes guesswork. You get a clear routine, practical nutrition guidance, and accountability
            that helps you stay on track even during busy weeks.
          </p>
          <div className="mt-6">
            <CtaButton href="/booking">Book Free Consultation</CtaButton>
          </div>
        </div>
      </section>
    </>
  );
}
