export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end px-6 pb-20 pt-32 md:justify-center md:pb-32">
      {/* Background orb */}
      <div className="glow-orb pointer-events-none absolute top-[20%] left-[60%] -translate-x-1/2 h-[800px] w-[800px] rounded-full bg-ice blur-[200px]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <p className="animate-fade-up font-mono text-[11px] uppercase tracking-[0.35em] text-on-variant mb-8">
          Your training, on autopilot
        </p>

        <h1 className="animate-fade-up-delay-1 font-serif italic text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tight text-on-surface max-w-4xl">
          Move.
          <br />
          We handle the rest.
        </h1>

        <p className="animate-fade-up-delay-2 mt-8 max-w-md text-[17px] leading-relaxed text-on-variant">
          Forma builds your workout, sets your targets, and adjusts
          tomorrow based on what you did today. Open the app. Train. Leave.
        </p>

        <div className="animate-fade-up-delay-3 mt-12 flex items-center gap-5">
          <a
            href="#download"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-on-surface pl-6 pr-5 text-[14px] font-semibold text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Download for iOS
            <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
          </a>
          <a
            href="#how"
            className="text-[14px] text-on-variant transition-colors hover:text-on-surface"
          >
            How it works
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
}
