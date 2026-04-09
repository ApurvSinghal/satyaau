import Image from "next/image";
import { FormCard } from "@/components/form-card";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/config/site";
import {
  featuredProgressCards,
  homeStats,
  methodSteps,
  serviceList,
  testimonialQuotes,
  trainingGalleryImages,
  whoIHelp,
} from "@/content/home";

export default function Home() {
  return (
    <>
      <section className="section-space">
        <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#d8ddd7] bg-[#111714] px-6 py-8 text-white shadow-[0_30px_80px_-40px_rgba(10,30,18,0.7)] md:px-8 md:py-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(98,191,132,0.28),_transparent_42%),linear-gradient(140deg,_rgba(255,255,255,0.05),_rgba(255,255,255,0))]" />
            <div className="relative space-y-7 fade-up">
              <div className="flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#9ed8b3]">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Certified Personal Trainer</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Senior IT Professional at Tennis Australia</span>
              </div>
              <div>
                <p className="label-kicker !text-[#9ed8b3]">Satya Fitness</p>
                <h1 className="mt-3 font-[var(--font-barlow)] text-5xl font-extrabold uppercase leading-[0.92] md:text-7xl">
                  Build A Strong Life Where Career, Fitness, And Wellbeing Work Together
                </h1>
              </div>
              <p className="max-w-2xl text-base leading-7 text-[#d6e0d8] md:text-lg">
                Satya is building a modern fitness brand for people who want more than aesthetics. The goal is a balanced
                life where professional ambition, physical strength, and mental wellbeing can coexist with discipline and clarity.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#9ed8b3]">Training Network</p>
                  <p className="mt-2 text-sm font-semibold text-white">Monash, Whitehorse, Manningham</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#9ed8b3]">Brand Focus</p>
                  <p className="mt-2 text-sm font-semibold text-white">Inclusive, motivating, transformative</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#9ed8b3]">Approach</p>
                  <p className="mt-2 text-sm font-semibold text-white">Lifestyle-first coaching</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-[#9ed8b3]">Only a small number of new clients are accepted each month.</p>
            </div>
          </div>
          <div className="surface-card fade-up stagger-1 relative h-[440px] overflow-hidden rounded-[2rem] md:h-[560px]">
            <Image
              src="/transformations/photo-1.jpg"
              alt="Satya fitness progress check"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9ed8b3]">Independent Fitness Influencer</p>
              <p className="mt-3 max-w-sm text-sm font-semibold leading-6 text-white/90">
                Inspiring people of all ages, genders, and backgrounds to treat fitness as a lifestyle, not a short-term fix.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2">
          <article className="surface-card p-8 md:p-10">
            <p className="label-kicker">The Vision</p>
            <h2 className="mt-3 font-[var(--font-barlow)] text-4xl font-extrabold uppercase leading-tight text-[var(--ink-soft)]">
              A Fitness Brand Built Around Balanced Living
            </h2>
            <p className="mt-4 text-[#4f584f] leading-7">
              This is not just about training sessions. The bigger vision is a globally recognised brand that shows people
              they can pursue meaningful work, build physical strength, and protect mental wellbeing at the same time.
            </p>
          </article>
          <article className="surface-card p-8 md:p-10">
            <p className="label-kicker">The Mission</p>
            <h2 className="mt-3 font-[var(--font-barlow)] text-4xl font-extrabold uppercase leading-tight text-[var(--ink-soft)]">
              Make Fitness Feel Accessible, Inclusive, And Worth Staying With
            </h2>
            <p className="mt-4 text-[#4f584f] leading-7">
              Through Personal Training, Bootcamp, and Work Out With Me sessions, the aim is to help more people feel
              supported, energised, and transformed by fitness, regardless of age, gender, or background.
            </p>
          </article>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="mx-auto w-full max-w-6xl space-y-8">
          <SectionHeading
            kicker="Brand Credibility"
            title="Built On Real Experience, Not Generic Advice"
            subtitle="A training philosophy shaped by real work pressure, real discipline, and real performance environments."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {homeStats.map((item, index) => (
              <div key={item.label} className={`surface-card p-6 fade-up stagger-${index + 1}`}>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#5f665f]">{item.label}</p>
                <p className="mt-2 font-[var(--font-barlow)] text-4xl font-extrabold uppercase">{item.value}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {featuredProgressCards.map((item) => (
              <div key={item.title} className="surface-card relative h-72 overflow-hidden">
                <Image src={item.image} alt={item.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="label-kicker !text-[#8ad1a9]">Real Progress</p>
                  <p className="mt-2 font-[var(--font-barlow)] text-2xl font-extrabold uppercase">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="mx-auto grid w-full max-w-6xl gap-4 md:grid-cols-3">
          {trainingGalleryImages.map((src, index) => (
            <div key={src} className="surface-card relative h-64 overflow-hidden md:h-72">
              <Image
                src={src}
                alt={`Satya training visual ${index + 1}`}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          ))}
        </div>
      </section>

      <section id="who-i-help" className="section-space pt-0">
        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-2">
          <SectionHeading
            kicker="Who I Help"
            title="Coaching For People Building More Than Just A Physique"
            subtitle="Designed for people who want fitness to strengthen their life, not compete with it."
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
            kicker="How It Works"
            title="Practical Coaching With High Standards"
            subtitle="Clear systems, strong accountability, and a realistic path to consistency."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {methodSteps.map((item, index) => (
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
            title="Three Ways To Train With Satya"
            subtitle="Choose the format that matches your schedule, confidence level, and training style."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {serviceList.map((item) => (
              <div key={item} className="surface-card p-6">
                <h3 className="font-[var(--font-barlow)] text-3xl font-extrabold uppercase">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0" id="lead-magnet">
        <div className="mx-auto w-full max-w-6xl">
          <FormCard
            action={siteConfig.forms.leadMagnet}
            title="Free 7-Day Reset Plan"
            description="A practical weekly structure for people who want momentum without sacrificing work, family, or sanity."
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
            title="What This Coaching Feels Like"
            subtitle="Early proof points that reflect the kind of transformation this brand is built to create."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {testimonialQuotes.map((quote) => (
              <blockquote key={quote} className="surface-card p-6 text-sm font-medium text-[#2a322a]">
                “{quote}”
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="mx-auto w-full max-w-6xl rounded-3xl border border-[#d8ddd7] bg-[#0f1110] px-6 py-12 text-white md:px-12">
          <p className="label-kicker text-[#8ad1a9]">Join The Journey</p>
          <h2 className="mt-4 font-[var(--font-barlow)] text-4xl font-extrabold uppercase md:text-6xl">
            Follow The Build Of A Modern Fitness Brand
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-[#d7ddd7] md:text-base">
            Follow along for coaching insights, training sessions, and the evolution of a brand built on ambition, strength, and balanced living.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://www.instagram.com/satyashr3291/" target="_blank" rel="noreferrer" className="rounded bg-white px-6 py-2.5 text-sm font-semibold text-black hover:bg-[#e8ece8]">
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
