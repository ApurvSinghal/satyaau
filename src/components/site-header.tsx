import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Book" },
  { href: "/transformations", label: "Transformations" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-5 pt-4 md:px-10">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-[#d8ddd7]/80 bg-[rgba(255,255,255,0.78)] px-4 py-3 shadow-[0_20px_50px_-35px_rgba(18,23,19,0.45)] backdrop-blur-xl md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#13241b] font-[var(--font-barlow)] text-xl font-extrabold uppercase text-white">
            S
          </span>
          <span>
            <span className="block font-[var(--font-barlow)] text-2xl font-extrabold uppercase leading-none text-[#162019]">
              Satya Fitness
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-[#5f665f]">
              Balanced Living Through Fitness
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-[#e2e7e1] bg-white/70 p-1.5 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-[#303731] transition hover:bg-[#f1f5f0] hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <details className="group relative md:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-[#d8ddd7] bg-white px-4 py-2 text-sm font-semibold text-[#1d241f] shadow-sm">
            Explore
          </summary>
          <div className="absolute right-0 mt-3 w-64 space-y-2 rounded-[1.5rem] border border-[#d8ddd7] bg-white/95 p-3 shadow-[0_24px_60px_-30px_rgba(18,23,19,0.4)] backdrop-blur-xl">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-xl px-3 py-3 text-sm font-semibold text-[#1d241f] transition hover:bg-[#f3f6f1]">
                {item.label}
              </Link>
            ))}
          </div>
        </details>
      </div>
    </header>
  );
}
