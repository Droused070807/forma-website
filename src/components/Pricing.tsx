export function Pricing() {
  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-ice">
          Pricing
        </p>
        <h2 className="mb-6 text-4xl font-semibold tracking-tight text-on-surface md:text-5xl">
          Simple. No tiers.
        </h2>
        <p className="mx-auto mb-12 max-w-md text-base text-on-variant">
          One plan. Everything included. Cancel anytime.
        </p>

        <div className="mx-auto max-w-sm rounded-2xl border border-ice/20 bg-container p-8 shadow-[0_0_80px_-20px_rgba(107,127,255,0.2)]">
          <div className="mb-6">
            <span className="text-5xl font-semibold tracking-tight text-on-surface">
              $9.99
            </span>
            <span className="ml-1 text-base text-on-variant">/month</span>
          </div>
          <ul className="mb-8 space-y-3 text-left">
            {[
              'Unlimited adaptive workouts',
              'Auto-progression + deload',
              'Smart rest timer',
              'Body intelligence insights',
              'Weekly AI coaching recaps',
              'All future features included',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ice/10 text-xs text-ice">
                  ✓
                </span>
                <span className="text-sm text-on-surface">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="#download"
            className="block w-full rounded-full bg-on-surface py-4 text-center text-base font-semibold text-black transition hover:bg-white"
          >
            Start free trial
          </a>
          <p className="mt-4 text-xs text-on-variant">
            7-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
