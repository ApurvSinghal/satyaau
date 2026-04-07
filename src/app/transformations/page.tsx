import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Transformations",
  description: "Before/after transformation stories and progress timelines.",
};

const gallery = [
  {
    title: "Client A - 12 Weeks",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Client B - Discipline Rebuild",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Client C - Strength & Fat Loss",
    image:
      "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=900&q=80",
  },
];

export default function TransformationsPage() {
  return (
    <section className="section-space">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <SectionHeading
          kicker="Transformations"
          title="Proof Over Promises"
          subtitle="Replace these placeholders with your real before/after client photos and milestone notes."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {gallery.map((item) => (
            <article key={item.title} className="surface-card overflow-hidden">
              <div className="relative h-72">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <p className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  Before/After Placeholder
                </p>
              </div>
              <p className="p-4 text-sm font-semibold">{item.title}</p>
            </article>
          ))}
        </div>

        <div className="surface-card p-6 md:p-8">
          <h3 className="font-[var(--font-barlow)] text-3xl font-extrabold uppercase">Progress Timeline Template</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {[
              "Week 1-2: Habit setup and baseline training",
              "Week 3-8: Progressive overload and nutrition consistency",
              "Week 9-12: Body composition refinement and maintenance strategy",
            ].map((item) => (
              <p key={item} className="rounded-xl border border-[#d8ddd7] bg-[#fbfcfa] p-4 text-sm text-[#4f584f]">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
