import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description: "The story, philosophy, and long-term brand vision behind Satya Fitness.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section-space">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <SectionHeading
              kicker="About Satya"
              title="A Fitness Brand Built Around Ambition, Strength, And Balance"
              subtitle="Satya Fitness is being shaped by real experience across coaching, professional life, and the belief that fitness should strengthen the whole person."
            />
            <p className="text-[#4f584f] leading-7">
              I am an independent fitness influencer, a certified personal trainer working across council-owned facilities,
              and a Senior IT Professional at Tennis Australia. That combination shaped the way I think about health:
              fitness has to fit inside real life, not sit outside it.
            </p>
            <p className="text-[#4f584f] leading-7">
              The vision now is to build a globally recognised personal brand that stands for balanced living, where
              professional ambition, physical strength, and mental wellbeing coexist. That vision is inclusive by design,
              built to inspire people of different ages, genders, and backgrounds to see fitness as a lifestyle.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="surface-card p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#5f665f]">Training Presence</p>
                <p className="mt-3 text-sm leading-6 text-[#4f584f]">Operating across Monash, Whitehorse, and Manningham council gym environments.</p>
              </div>
              <div className="surface-card p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#5f665f]">Brand Direction</p>
                <p className="mt-3 text-sm leading-6 text-[#4f584f]">Coaching that is accessible, motivating, and transformative without losing realism.</p>
              </div>
            </div>
          </div>
          <div className="surface-card relative h-[440px] overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-55px_rgba(17,23,20,0.5)] md:h-[560px]">
            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
            <div className="absolute left-6 right-6 top-6 z-[2] rounded-2xl border border-white/10 bg-black/30 p-4 text-white backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9ed8b3]">Satya Fitness Vision</p>
              <p className="mt-2 text-sm leading-6 text-white/90">A fitness brand for people who want professional growth, stronger bodies, and steadier minds together.</p>
            </div>
            <div className="absolute inset-x-0 bottom-0 z-[2] p-6 text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9ed8b3]">Independent Fitness Influencer</p>
              <p className="mt-2 max-w-xs text-sm font-semibold leading-6 text-white/90">Built to help more people feel that fitness belongs inside their everyday identity, not outside it.</p>
            </div>
            <Image
              src="/transformations/photo-6.jpg"
              alt="Satya outdoors holding a shaker"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="mx-auto w-full max-w-6xl grid gap-4 md:grid-cols-3">
          {[
            {
              title: "The Foundation",
              body: "Fitness should support a demanding life, not require you to step away from it.",
            },
            {
              title: "The Vision",
              body: "Build a globally recognised brand where balanced living is not a slogan, but the standard.",
            },
            {
              title: "The Impact",
              body: "Create training experiences that make people feel included, empowered, and capable of lasting change.",
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
        <div className="mx-auto max-w-6xl surface-card rounded-[2rem] p-8 md:p-10">
          <p className="label-kicker">Brand Philosophy</p>
          <h2 className="mt-3 font-[var(--font-barlow)] text-4xl font-extrabold uppercase md:text-5xl">
            Fitness Should Expand Your Life, Not Shrink It.
          </h2>
          <p className="mt-4 max-w-3xl text-[#4f584f] leading-7">
            Satya Fitness exists to help people train in a way that feels intelligent, grounded, and sustainable. The aim
            is not just visible progress, but a stronger way of living: ambitious in work, capable in body, and steady in mind.
          </p>
        </div>
      </section>
    </>
  );
}
