const features = [
  {
    label: 'Auto-progression',
    title: "Weight goes up when you\u2019re ready",
    description:
      "Forma tracks your sets across sessions. When you consistently hit the top of your rep range, the target increases automatically. No guessing.",
  },
  {
    label: 'Smart rest timer',
    title: 'Learns your pace',
    description:
      "The rest timer adapts to how long you actually rest \u2014 not a fixed number. After a few sessions, it matches your rhythm.",
  },
  {
    label: 'Automatic deload',
    title: 'Recovery built in',
    description:
      "After 4 weeks of hitting targets, Forma programs a lighter week. You don\u2019t decide when to deload \u2014 it happens at the right time.",
  },
  {
    label: 'Consistency engine',
    title: 'Missed a week? No punishment.',
    description:
      "Forma detects gaps and adjusts. Restart mode gives you a short, easy session to rebuild momentum. No shame, no reset.",
  },
  {
    label: 'Body intelligence',
    title: "Connects the dots you can\u2019t see",
    description:
      "After a few weeks, Forma surfaces insights: \u201CBench is up 15 lb while bodyweight held steady. That\u2019s lean strength gain.\u201D",
  },
  {
    label: 'Zero-config nutrition',
    title: 'High-level fuel guidance',
    description:
      "No calorie counting. Forma tells you the mode for the day \u2014 push fuel, lean day, recovery \u2014 and keeps it simple.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-ice">
          Features
        </p>
        <h2 className="mb-20 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-on-surface md:text-5xl">
          Everything adapts.
          <br />
          Nothing to configure.
        </h2>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="border-b border-r border-white/[0.04] bg-black p-8 last:border-b-0 md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(2n)]:border-r"
            >
              <span className="mb-3 inline-block rounded-md bg-ice-dim px-2.5 py-1 font-mono text-[11px] font-medium text-ice">
                {feature.label}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-on-surface">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-on-variant">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
