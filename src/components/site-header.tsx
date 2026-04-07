import Link from "next/link";
import { CtaButton } from "@/components/cta-button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/transformations", label: "Transformations" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Apply" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d8ddd7]/80 bg-[#f7f8f5]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-10">
        <Link href="/" className="font-[var(--font-barlow)] text-2xl font-extrabold uppercase">
          Satya Fitness
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[#303731] transition hover:text-black"
            >
              {item.label}
            </Link>
          ))}
          <CtaButton href="/booking" className="px-5 py-2.5 text-xs">
            Book Free Call
          </CtaButton>
        </nav>

        <details className="group relative md:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-[#d8ddd7] px-4 py-2 text-sm font-semibold">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-56 space-y-2 rounded-2xl border border-[#d8ddd7] bg-white p-3 shadow-lg">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-lg px-3 py-2 text-sm font-semibold">
                {item.label}
              </Link>
            ))}
            <Link href="/booking" className="cta-primary block w-full text-center text-xs">
              Book Free Call
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
