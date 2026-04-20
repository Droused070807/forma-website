export function CTA() {
  return (
    <section
      id="download"
      className="relative py-32 px-6"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[400px] rounded-full bg-ice/[0.05] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <h2 className="mb-6 font-serif text-5xl italic leading-tight text-on-surface md:text-6xl">
          Stop planning.
          <br />
          Start training.
        </h2>
        <p className="mx-auto mb-10 max-w-md text-base leading-relaxed text-on-variant">
          Forma takes 60 seconds to learn you, then quietly fades into your
          week. Your first workout is ready the moment you sign up.
        </p>
        <a
          href="https://apps.apple.com/app/forma"
          className="inline-flex h-14 items-center rounded-full bg-on-surface px-8 text-base font-semibold text-black transition hover:bg-white"
        >
          Download on the App Store
        </a>
      </div>
    </section>
  );
}
