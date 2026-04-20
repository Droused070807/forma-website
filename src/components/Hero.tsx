export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end px-6 pb-24 pt-32 md:justify-center md:pb-32">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <h1 className="animate-fade-up font-serif italic text-[clamp(3rem,8vw,7rem)] leading-[0.93] tracking-tight text-on-surface max-w-4xl">
          Your gym app
          <br />
          shouldn&apos;t need
          <br />
          a tutorial.
        </h1>

        <p className="animate-fade-up-delay-1 mt-10 max-w-lg text-[18px] leading-[1.6] text-on-variant">
          Forma tells you exactly what to lift, how heavy, and how many reps
          &mdash; then adjusts everything tomorrow based on what you actually did.
          No planning. No spreadsheets. No thinking.
        </p>

        <div className="animate-fade-up-delay-2 mt-12 flex items-center gap-5">
          <a
            href="#download"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-on-surface pl-6 pr-5 text-[14px] font-semibold text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Download for iOS
            <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
          </a>
          <span className="text-[13px] text-on-variant">Free to start</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
    </section>
  );
}
