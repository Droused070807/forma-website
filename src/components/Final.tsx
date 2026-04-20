export function Final() {
  return (
    <section id="download" className="relative px-6 py-32 md:py-44">
      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="border-t border-white/[0.04] pt-20 md:pt-28">
          <h2 className="font-serif italic text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] tracking-tight text-on-surface mb-6">
            Your first workout
            <br />
            is already built.
          </h2>
          <p className="text-[17px] leading-relaxed text-on-variant max-w-md mb-10">
            Sign up, answer four questions, and Forma generates your first week.
            You can be training in under two minutes.
          </p>
          <a
            href="https://apps.apple.com/app/forma"
            className="group inline-flex h-14 items-center gap-2 rounded-full bg-on-surface pl-8 pr-7 text-[15px] font-semibold text-black transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Download for iOS
            <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
