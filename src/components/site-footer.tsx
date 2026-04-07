import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#d8ddd7] bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-10 md:grid-cols-3 md:px-10">
        <div>
          <h3 className="font-[var(--font-barlow)] text-2xl font-extrabold uppercase">Satya Fitness</h3>
          <p className="mt-2 text-sm text-[#5f665f]">{siteConfig.tagline}</p>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide">Quick Links</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <Link href="/transformations" className="hover:underline">
              Transformations
            </Link>
            <Link href="/booking" className="hover:underline">
              Book Free Call
            </Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide">Connect</h4>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="hover:underline">
              Instagram
            </a>
            <a href={`mailto:${siteConfig.contactEmail}`} className="hover:underline">
              {siteConfig.contactEmail}
            </a>
            <a href={`tel:${siteConfig.contactPhone}`} className="hover:underline">
              {siteConfig.contactPhone}
            </a>
            <p className="text-[#5f665f]">Online coaching for busy professionals worldwide</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
