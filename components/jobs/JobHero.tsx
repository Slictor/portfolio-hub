"use client";

interface JobHeroProps {
  jobCount: number;
  contactCount: number;
  appliedCount: number;
}

export default function JobHero({
  jobCount,
  contactCount,
  appliedCount,
}: JobHeroProps) {
  const stats = [
    { value: String(jobCount), label: "JOBBTIPS" },
    { value: String(contactCount), label: "KONTAKTER" },
    { value: String(appliedCount), label: "ANSÖKTA" },
  ];

  return (
    <section className="relative mt-32 bg-background flex flex-col justify-center px-8 sm:px-16 lg:px-24 overflow-hidden">
      {/* Decorative JOBB */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-serif text-foreground opacity-[0.06] text-[20vw] leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        JOBB
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        {/* Top label */}
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted mb-8">
          Portfolio Hub &middot; Jobbtracker
        </p>

        {/* Headline */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl leading-[1.05] mb-8">
          Håll koll på
          <br />
          <em className="text-accent font-serif italic">alla</em>
          <br />
          möjligheter.
        </h1>

        {/* Subtitle */}
        <p className="text-muted text-base sm:text-lg max-w-md leading-relaxed mb-16">
          Samla jobbtips, håll kontakt med företag och följ dina ansökningar på
          ett och samma ställe.
        </p>

        {/* Stats */}
        <div className="flex gap-16">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-4xl sm:text-5xl text-foreground">
                {stat.value}
              </p>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
