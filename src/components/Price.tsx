export function Price() {
  return (
    <section id="pricing" className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="md:flex md:items-start md:justify-between md:gap-16">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-ice mb-5">
              Pricing
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.1] tracking-tight text-on-surface mb-6">
              One plan.
              <br />
              No decisions here either.
            </h2>
            <p className="text-[16px] leading-relaxed text-on-variant max-w-sm">
              Every feature. Every update. No tiers to compare,
              no features locked behind upgrades. The whole engine, from day one.
            </p>
          </div>

          <div className="md:w-1/2 md:max-w-sm md:ml-auto">
            <div className="rounded-2xl border border-ice/[0.12] bg-surface p-8">
              <div className="mb-8">
                <span className="text-[48px] font-semibold tracking-tight text-on-surface leading-none">
                  $9.99
                </span>
                <span className="text-[15px] text-on-variant ml-1">/month</span>
              </div>

              <div className="space-y-3.5 mb-8">
                <PriceItem text="Workouts built from your history every day" />
                <PriceItem text="Weight targets that increase when you&apos;re ready" />
                <PriceItem text="Automatic deload weeks" />
                <PriceItem text="Rest timer that learns your pace" />
                <PriceItem text="Weekly coaching recaps" />
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

function PriceItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-2 h-1 w-1 rounded-full bg-ice shrink-0" />
      <span
        className="text-[14px] leading-relaxed text-on-variant"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
}
