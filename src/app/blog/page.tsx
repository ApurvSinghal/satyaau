import type { Metadata } from "next";
import Image from "next/image";
import { CtaButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Blog",
  description: "Fitness guidance for busy professionals from Satya Fitness.",
};

const posts = [
  {
    title: "Best diet for Indians in Australia",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "How to keep Indian food in your routine while creating a calorie deficit that actually works.",
  },
  {
    title: "How to lose fat without giving up your favorite foods",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "A practical framework to manage portions, protein, and consistency without feeling restricted.",
  },
  {
    title: "Top beginner gym mistakes",
    image:
      "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Avoid the most common training and recovery mistakes that slow down your progress.",
  },
];

export default function BlogPage() {
  return (
    <section className="section-space">
      <div className="mx-auto w-full max-w-6xl space-y-8">
        <SectionHeading
          kicker="Blog"
          title="No-Fluff Fitness Insights"
          subtitle="Simple content for people who want results without confusion."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="surface-card flex flex-col p-6">
              <div className="relative mb-4 h-44 overflow-hidden rounded-xl">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <h3 className="font-[var(--font-barlow)] text-3xl font-extrabold uppercase leading-tight">
                {post.title}
              </h3>
              <p className="mt-3 text-sm text-[#4f584f]">{post.excerpt}</p>
              <CtaButton href="/booking" variant="secondary" className="mt-6 w-full text-center">
                Book Free Call
              </CtaButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
