export function Price() {
  return (
    <section id="pricing" className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="md:flex md:items-start md:justify-between md:gap-16">
          {/* Left: copy */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-ice mb-5">
              Pricing
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.1] tracking-tight text-on-surface mb-6">
              One plan.
              <br />
              Everything included.
            </h2>
            <p className="text-[16px] leading-relaxed text-on-variant max-w-sm">
              No tiers, no feature gates, no upsells. Every user gets the full
              engine. Cancel anytime.
            </p>
          </div>

          {/* Right: price card */}
          <div className="md:w-1/2 md:max-w-sm md:ml-auto">
            <div className="rounded-2xl border border-ice/[0.15] bg-[#0d0d0d] p-8 shadow-[0_0_80px_-20px_rgba(107,127,255,0.12)]">
              <div className="mb-8">
                <span className="text-[48px] font-semibold tracking-tight text-on-surface leading-none">
                  $9.99
                </span>
                <span className="text-[15px] text-on-variant ml-1">/month</span>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  'Adaptive workouts every day',
                  'Auto-progression + deload',
                  'Smart rest timer',
                  'Body intelligence insights',
                  'AI coaching recaps',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="h-1 w-1 rounded-full bg-ice shrink-0" />
                    <span className="text-[14px] text-on-variant">{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#download"
                className="block w-full rounded-full bg-on-surface py-3.5 text-center text-[14px] font-semibold text-black transition-transform hover:scale-[1.01] active:scale-[0.99]"
              >
                Start 7-day free trial
              </a>
              <p className="mt-4 text-center text-[12px] text-on-variant">
                No credit card required
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
