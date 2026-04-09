import type { Metadata } from "next";
import Image from "next/image";
import { progressTimeline, transformationGallery } from "@/content/transformations";

export const metadata: Metadata = {
  title: "Transformations",
  description: "A curated proof page showing the training style, discipline, and real performance behind Satya Fitness.",
};

export default function TransformationsPage() {
  return (
    <section className="section-space">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#d8ddd7] bg-[#111714] px-6 py-8 text-white shadow-[0_30px_80px_-40px_rgba(10,30,18,0.7)] md:px-8 md:py-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(98,191,132,0.24),_transparent_40%),linear-gradient(140deg,_rgba(255,255,255,0.05),_rgba(255,255,255,0))]" />
            <div className="relative space-y-6">
              <div className="max-w-3xl space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9ed8b3]">Transformations</p>
                <h2 className="font-[var(--font-barlow)] text-4xl font-extrabold uppercase leading-tight text-white md:text-5xl">
                  Proof That The Brand Is Lived, Not Just Marketed
                </h2>
                <p className="text-base text-[#d7e2d8] md:text-lg">
                  These are not stock before-and-after claims. They are moments of discipline, performance, and consistency that shape the Satya Fitness standard.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#9ed8b3]">What You See</p>
                  <p className="mt-2 text-sm font-semibold text-white">Real training, events, and progress markers</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#9ed8b3]">What It Means</p>
                  <p className="mt-2 text-sm font-semibold text-white">Consistency, resilience, and balanced living in action</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#9ed8b3]">Why It Matters</p>
                  <p className="mt-2 text-sm font-semibold text-white">Clients can trust a coach who actively lives the work</p>
                </div>
              </div>
            </div>
          </div>

          <div className="surface-card grid gap-4 rounded-[2rem] p-6 md:grid-cols-2 md:p-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#5f665f]">What This Page Shows</p>
              <h3 className="mt-3 font-[var(--font-barlow)] text-3xl font-extrabold uppercase text-[#1d241f]">A curated view of the standard behind the coaching</h3>
            </div>
            <div className="space-y-3 text-sm leading-7 text-[#4f584f]">
              <p>Satya Fitness is not positioned around empty motivation. The proof is in the repeated work, the event environments, the progress snapshots, and the energy carried into each session.</p>
              <p>This page is meant to feel like evidence: a visual record of a brand built through action, not decoration.</p>
            </div>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {transformationGallery.map((item) => (
            <article key={item.title} className="surface-card overflow-hidden rounded-[2rem] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_75px_-55px_rgba(17,23,20,0.5)]">
              <div className="relative h-80">
                <Image src={item.image} alt={item.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9ed8b3]">{item.tag}</p>
                  <p className="mt-2 text-lg font-semibold leading-6">{item.title}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="surface-card rounded-[2rem] p-6 md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#5f665f]">Why This Matters</p>
            <h3 className="mt-3 font-[var(--font-barlow)] text-3xl font-extrabold uppercase text-[#1d241f]">Transformation Is More Than A Final Photo</h3>
            <p className="mt-4 text-sm leading-7 text-[#4f584f]">The strongest transformations come from repeatable habits, progressive training, and a lifestyle people can actually maintain. That is the standard Satya Fitness is built around.</p>
          </div>

          <div className="surface-card rounded-[2rem] p-6 md:p-8">
            <h3 className="font-[var(--font-barlow)] text-3xl font-extrabold uppercase text-[#1d241f]">Progress Timeline</h3>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
            {progressTimeline.map((item) => (
                <p key={item} className="rounded-2xl border border-[#d8ddd7] bg-[#fbfcfa] p-4 text-sm leading-6 text-[#4f584f]">
                  {item}
                </p>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
