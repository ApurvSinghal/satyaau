import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media & Brand Collabs",
  description: "Partnership and media collaboration information for Satya Fitness.",
};

const collaborationAreas = [
  "Brand campaigns aligned with fitness, lifestyle, wellbeing, and performance",
  "Event appearances, speaking opportunities, and community activations",
  "Content collaborations for gyms, wellness brands, and audience-led campaigns",
  "Creative partnerships that support inclusive and sustainable fitness messaging",
];

export default function MediaBrandCollabsPage() {
  return (
    <section className="section-space">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#d8ddd7] bg-[#111714] px-6 py-8 text-white shadow-[0_30px_80px_-40px_rgba(10,30,18,0.7)] md:px-8 md:py-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(98,191,132,0.24),_transparent_40%),linear-gradient(140deg,_rgba(255,255,255,0.05),_rgba(255,255,255,0))]" />
            <div className="relative space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9ed8b3]">Media & Brand Collabs</p>
              <h1 className="font-[var(--font-barlow)] text-4xl font-extrabold uppercase leading-tight text-white md:text-6xl">
                Partner With A Brand Being Built Around Real Balance
              </h1>
              <p className="max-w-2xl text-sm leading-7 text-[#d7e2d8] md:text-base">
                Satya Fitness is open to thoughtful partnerships, media features, and campaign collaborations that align with inclusive fitness, balanced living, and meaningful personal growth.
              </p>
            </div>
          </div>

          <div className="surface-card rounded-[2rem] p-6 md:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#5f665f]">Ideal Fit</p>
            <h2 className="mt-3 font-[var(--font-barlow)] text-3xl font-extrabold uppercase text-[var(--ink-soft)]">
              Brands And Platforms That Want Substance, Not Surface-Level Hype
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#4f584f]">
              The strongest collaborations will be with people and brands who care about long-term health, strong communities, professional credibility, and authentic storytelling.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {collaborationAreas.map((item) => (
            <article key={item} className="surface-card rounded-[2rem] p-6">
              <p className="text-sm leading-7 text-[#4f584f]">{item}</p>
            </article>
          ))}
        </div>

        <div className="surface-card rounded-[2rem] p-8 md:p-10">
          <p className="label-kicker">Enquiries</p>
          <h2 className="mt-3 font-[var(--font-barlow)] text-4xl font-extrabold uppercase text-[var(--ink-soft)] md:text-5xl">
            Start A Conversation About Partnerships Or Media Opportunities
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#4f584f] md:text-base">
            For brand collaborations, event opportunities, media requests, or campaign partnerships, reach out via email with a short overview of your idea, audience, and timeline.
          </p>
          <a href="mailto:fit@satya.au" className="mt-6 inline-flex rounded-full bg-[#13241b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1b3326]">
            Email fit@satya.au
          </a>
        </div>
      </div>
    </section>
  );
}
