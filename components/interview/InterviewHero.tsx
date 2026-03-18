"use client";

interface InterviewHeroProps {
  sessionCount: number;
}

export default function InterviewHero({ sessionCount }: InterviewHeroProps) {
  return (
    <section className="relative pt-28 pb-16 px-6 overflow-hidden">
      {/* Decorative INTERVJU */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-serif text-foreground opacity-[0.06] text-[20vw] leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        INTERVJU
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        {/* Top label */}
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted mb-8">
          Portfolio Hub &middot; Intervjuträning
        </p>

        {/* Headline */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl leading-[1.05] mb-8">
          Träna inför
          <br />
          <em className="text-accent font-serif italic">nästa</em>
          <br />
          intervju.
        </h1>

        {/* Subtitle */}
        <p className="text-muted text-base sm:text-lg max-w-md leading-relaxed mb-16">
          Öva inför tekniska intervjuer med en AI-driven intervjuare. Välj
          svårighetsgrad och ämne, så kör vi!
        </p>

        {/* Stats */}
        <div className="flex gap-16">
          <div>
            <p className="font-serif text-4xl sm:text-5xl text-foreground">
              {sessionCount}
            </p>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted mt-1">
              SESSIONER
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
