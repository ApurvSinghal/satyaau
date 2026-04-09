import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="px-5 pb-8 pt-4 md:px-10 md:pb-10">
      <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem] border border-[#d8ddd7] bg-[#111714] text-white shadow-[0_32px_90px_-55px_rgba(18,23,19,0.75)]">
        <div className="grid gap-8 px-6 py-10 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:px-10 md:py-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#9ed8b3]">Satya Fitness</p>
            <h3 className="mt-4 font-[var(--font-barlow)] text-4xl font-extrabold uppercase leading-none">
              A Modern Fitness Brand For Balanced Living
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#d1ddd4]">{siteConfig.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9ed8b3]">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Certified Personal Trainer</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Senior IT Professional</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Independent Fitness Influencer</span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.22em] text-[#9ed8b3]">Explore</h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#e4ece6]">
              <Link href="/" className="transition hover:text-white hover:underline">
                Home
              </Link>
              <Link href="/about" className="transition hover:text-white hover:underline">
                About
              </Link>
              <Link href="/services" className="transition hover:text-white hover:underline">
                Book
              </Link>
              <Link href="/transformations" className="transition hover:text-white hover:underline">
                Transformations
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.22em] text-[#9ed8b3]">Connect</h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[#e4ece6]">
              <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="transition hover:text-white hover:underline">
                Instagram
              </a>
              <a href={`mailto:${siteConfig.contactEmail}`} className="transition hover:text-white hover:underline">
                {siteConfig.contactEmail}
              </a>
              <a href={`tel:${siteConfig.contactPhone}`} className="transition hover:text-white hover:underline">
                {siteConfig.contactPhone}
              </a>
              <p className="pt-2 text-xs font-medium uppercase tracking-[0.18em] text-[#9ed8b3]">
                Monash, Whitehorse, Manningham and beyond
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-6 py-4 md:px-10">
          <div className="flex flex-col gap-3 text-xs text-[#aebcaf] md:flex-row md:items-center md:justify-between">
            <p>Satya Fitness is building a globally recognised brand where ambition, strength, and mental wellbeing can coexist.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy-policy" className="transition hover:text-white hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms-refund-policy" className="transition hover:text-white hover:underline">
                Terms &amp; Refund Policy
              </Link>
              <Link href="/media-brand-collabs" className="transition hover:text-white hover:underline">
                Media &amp; Brand Collabs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
