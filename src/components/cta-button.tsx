import Link from "next/link";

type CtaButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CtaButtonProps) {
  const variantClass = variant === "primary" ? "cta-primary" : "cta-secondary";

  return (
    <Link href={href} className={`${variantClass} ${className}`}>
      {children}
    </Link>
  );
}
