export function How() {
  return (
    <section id="how" className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-7xl">
        {/* Staggered layout — not a grid */}
        <div className="max-w-xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-ice mb-5">
            How it works
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.1] tracking-tight text-on-surface">
            60 seconds to set up.
            <br />
            Then it disappears into your week.
          </h2>
        </div>

        <div className="mt-24 space-y-0">
          <Step
            number="01"
            title="Tell Forma your goal"
            body="Build, lean, or maintain. Pick your days and equipment. That's the last decision you make."
            align="left"
          />
          <Step
            number="02"
            title="Your workout is waiting"
            body="Every day: exercises, sets, reps, and weight targets. All set from your history. Open the app and train."
            align="right"
          />
          <Step
            number="03"
            title="Tomorrow adjusts itself"
            body="Missed a day? Ate less? Hit every target? Forma recalibrates overnight. You just show up again."
            align="left"
          />
        </div>
      </div>
    </section>
  );
}

function Step({
  number,
  title,
  body,
  align,
}: {
  number: string;
  title: string;
  body: string;
  align: 'left' | 'right';
}) {
  return (
    <div
      className={`border-t border-white/[0.04] py-16 md:py-20 md:flex md:items-start md:gap-20 ${
        align === 'right' ? 'md:flex-row-reverse md:text-right' : ''
      }`}
    >
      <div className="md:w-1/2">
        <span className="font-mono text-[13px] text-ice/40">{number}</span>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-on-surface md:text-3xl">
          {title}
        </h3>
      </div>
      <div className="md:w-1/2 mt-4 md:mt-1">
        <p className="text-[16px] leading-relaxed text-on-variant max-w-md">
          {body}
        </p>
      </div>
    </div>
  );
}
