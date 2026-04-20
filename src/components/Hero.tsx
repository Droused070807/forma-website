export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-16">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-ice/[0.06] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-on-variant">
          Your training, on autopilot
        </p>
        <h1 className="font-serif text-6xl italic leading-[1.05] text-on-surface md:text-8xl">
          Move.
          <br />
          We handle
          <br />
          the rest.
        </h1>
        <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-on-variant">
          Forma builds your workout, adapts your progression, and adjusts
          tomorrow based on today. No thinking required.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#download"
            className="inline-flex h-14 items-center rounded-full bg-on-surface px-8 text-base font-semibold text-black transition hover:bg-white"
          >
            Download for iOS
          </a>
          <a
            href="#how"
            className="inline-flex h-14 items-center rounded-full border border-white/10 px-8 text-base font-medium text-on-variant transition hover:border-white/20 hover:text-on-surface"
          >
            See how it works
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="h-10 w-[1px] bg-gradient-to-b from-transparent via-on-variant/30 to-transparent" />
      </div>
    </section>
  );
}
