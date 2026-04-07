import type { Metadata } from "next";
import { Barlow_Condensed, Sora } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  weight: ["600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Satya Fitness | Lean, Strong, Disciplined Coaching",
    template: "%s | Satya Fitness",
  },
  description:
    "Simple and sustainable fitness systems for busy professionals who want fat loss, strength, and long-term discipline.",
  openGraph: {
    title: "Satya Fitness",
    description:
      "Helping busy professionals get lean, strong, and disciplined with simple, sustainable routines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full page-bg flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
