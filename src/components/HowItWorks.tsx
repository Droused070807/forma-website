const steps = [
  {
    number: '01',
    title: 'Tell Forma your goal',
    description:
      'Build muscle, get lean, or maintain. Pick your days, equipment, and experience. Takes 60 seconds.',
  },
  {
    number: '02',
    title: 'Train with zero decisions',
    description:
      'Your workout is ready every day. Exercises, sets, reps, and weight targets — all set. Just show up and lift.',
  },
  {
    number: '03',
    title: 'Forma adapts silently',
    description:
      'Missed a day? Ate less? Hit every target? Tomorrow adjusts automatically. The app learns your rhythm.',
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-ice">
          How it works
        </p>
        <h2 className="mb-20 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-on-surface md:text-5xl">
          Three steps.
          <br />
          Then it's automatic.
        </h2>

        <div className="grid gap-16 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="group">
              <span className="mb-4 block font-mono text-sm text-ice/60">
                {step.number}
              </span>
              <h3 className="mb-3 text-xl font-semibold text-on-surface">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-on-variant">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
