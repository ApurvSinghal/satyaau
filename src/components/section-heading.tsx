type SectionHeadingProps = {
  kicker?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ kicker, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-3">
      {kicker ? <p className="label-kicker">{kicker}</p> : null}
      <h2 className="font-[var(--font-barlow)] text-4xl font-extrabold uppercase leading-tight md:text-5xl">
        {title}
      </h2>
      {subtitle ? <p className="text-base text-[#5f665f] md:text-lg">{subtitle}</p> : null}
    </div>
  );
}
