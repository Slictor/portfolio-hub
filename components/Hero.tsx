export default function Hero() {
  const stats = [
    { value: "12", label: "STUDENTER" },
    { value: "6+", label: "TEKNOLOGIER" },
  ];

  return (
    <section className="relative min-h-screen bg-background flex flex-col justify-center px-8 sm:px-16 lg:px-24 overflow-hidden">
      {/* Decorative 2026 */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 font-serif text-foreground opacity-[0.06] text-[20vw] leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        2026
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        {/* Top label */}
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted mb-8">
          Lexicon &middot; Frontend System Development
        </p>

        {/* Headline */}
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl leading-[1.05] mb-8">
          Vi bygger
          <br />
          <em className="text-accent font-serif italic">framtidens</em>
          <br />
          frontend.
        </h1>

        {/* Subtitle */}
        <p className="text-muted text-base sm:text-lg max-w-md leading-relaxed mb-16">
          En samlad klass av frontendutvecklare som är redo att lösa verkliga
          problem. Utforska våra profiler, kompetenser och projekt.
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
