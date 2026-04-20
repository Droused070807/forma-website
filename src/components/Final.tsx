export function Final() {
  return (
    <section id="download" className="relative px-6 py-32 md:py-48">
      <div className="glow-orb pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-ice blur-[200px]" />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <h2 className="font-serif italic text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight text-on-surface mb-8">
          Stop planning.
          <br />
          Start training.
        </h2>
        <p className="text-[17px] leading-relaxed text-on-variant max-w-md mx-auto mb-12">
          Your first workout is ready the moment you sign up.
        </p>
        <a
          href="https://apps.apple.com/app/forma"
          className="group inline-flex h-14 items-center gap-2 rounded-full bg-on-surface pl-8 pr-7 text-[15px] font-semibold text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Download for iOS
          <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
        </a>
      </div>
    </section>
  );
}
