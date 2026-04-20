const bulletPoints = [
  'Workouts adapt to missed days, low nutrition, and long gaps',
  'Progression targets are set from your actual logged performance',
  'Weekly recaps connect strength gains to body composition trends',
  'Rest days are auto-detected \u2014 the app stays calibrated even when you don\u2019t open it',
];

export function Intelligence() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-ice">
              Intelligence layer
            </p>
            <h2 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-on-surface md:text-5xl">
              It feels like
              <br />a coach who
              <br />
              <span className="italic font-serif">knows you.</span>
            </h2>
            <p className="mb-8 max-w-md text-base leading-relaxed text-on-variant">
              Forma&apos;s decisions are deterministic &mdash; not random AI. Every workout
              is built from your history, your consistency, and your body&apos;s
              response. AI only polishes the language, never the logic.
            </p>
            <ul className="space-y-4">
              {bulletPoints.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-ice" />
                  <span className="text-sm leading-relaxed text-on-variant">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-white/[0.08] bg-container p-6 shadow-[0_0_60px_-12px_rgba(107,127,255,0.15)]">
              <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-on-variant">
                Forma Brief
              </p>
              <p className="mb-4 text-xl font-semibold leading-snug text-on-surface">
                Momentum is working for you.
              </p>
              <p className="mb-6 text-sm leading-relaxed text-on-variant">
                This is the volume-focused slot in your weekly plan. 2 lifts
                improved from your last matching sessions. Keep compounds first
                and stay clean on accessories.
              </p>
              <div className="flex items-center justify-between border-t border-white/[0.06] pt-4">
                <span className="text-xs font-medium text-on-variant">
                  Momentum
                </span>
                <span className="text-sm font-semibold text-ice">
                  Locked in
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
