export function Engine() {
  return (
    <section className="relative px-6 py-32 md:py-40">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="md:flex md:items-start md:gap-20 lg:gap-32">
          <div className="md:w-1/2 md:sticky md:top-32">
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-ice mb-5">
              Under the hood
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.1] tracking-tight text-on-surface mb-8">
              Not a template.
              <br />
              Not a chatbot.
              <br />
              <span className="font-serif italic">A system that reads you.</span>
            </h2>
            <p className="text-[16px] leading-relaxed text-on-variant max-w-md mb-12">
              Every workout is generated from your actual training history.
              Forma doesn&apos;t guess &mdash; it calculates. Here&apos;s what it does
              that you&apos;ll never have to think about:
            </p>

            <div className="space-y-8">
              <EnginePoint
                title="You benched 135 for 12 reps three sessions in a row."
                result="Forma sets your next target to 140 &times; 8."
              />
              <EnginePoint
                title="You missed Thursday and Friday."
                result="Monday&apos;s session is shorter and lighter. No guilt screen."
              />
              <EnginePoint
                title="You hit every target for 4 straight weeks."
                result="Forma programs a deload week automatically. You come back stronger."
              />
            </div>
          </div>

          <div className="md:w-1/2 mt-16 md:mt-0">
            <div className="rounded-2xl border border-white/[0.06] bg-surface overflow-hidden shadow-[0_0_80px_-20px_rgba(107,127,255,0.08)]">
              <div className="p-7 border-b border-white/[0.04]">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-on-variant mb-3">
                  Forma Brief &middot; Wednesday
                </p>
                <p className="text-[22px] font-semibold leading-snug tracking-tight text-on-surface mb-3">
                  Bench is up 10 lb this month.
                </p>
                <p className="text-[14px] leading-relaxed text-on-variant">
                  3 of 4 sessions done. Upper body volume is balanced.
                  Keep today controlled &mdash; strength day.
                </p>
              </div>

              <div className="p-7 border-b border-white/[0.04]">
                <div className="flex items-center justify-between mb-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-on-variant">
                    Today &middot; Upper
                  </p>
                  <span className="text-[12px] font-medium text-ice">36 min</span>
                </div>
                <div className="space-y-0">
                  <MockExercise name="Bench Press" detail="4 &times; 5-8 &middot; 140 lb" highlight />
                  <MockExercise name="Row" detail="4 &times; 5-8 &middot; 90 lb" />
                  <MockExercise name="Shoulder Press" detail="3 &times; 8-12 &middot; 70 lb" />
                  <MockExercise name="Curl" detail="3 &times; 8-12 &middot; 30 lb" />
                  <MockExercise name="Tricep Pushdown" detail="3 &times; 8-12 &middot; 50 lb" />
                </div>
              </div>

              <div className="p-7 flex items-center justify-between">
                <span className="text-[12px] font-medium text-on-variant">Momentum</span>
                <span className="text-[13px] font-semibold text-ice">Locked in</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EnginePoint({ title, result }: { title: string; result: string }) {
  return (
    <div className="border-l-2 border-white/[0.06] pl-5">
      <p className="text-[14px] font-medium text-on-surface mb-1">{title}</p>
      <p
        className="text-[14px] leading-relaxed text-ice/80"
        dangerouslySetInnerHTML={{ __html: result }}
      />
    </div>
  );
}

function MockExercise({ name, detail, highlight }: { name: string; detail: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-white/[0.03] last:border-b-0">
      <span className={`text-[14px] font-medium ${highlight ? 'text-on-surface' : 'text-on-surface/70'}`}>{name}</span>
      <span
        className={`font-mono text-[12px] ${highlight ? 'text-ice' : 'text-on-variant'}`}
        dangerouslySetInnerHTML={{ __html: detail }}
      />
    </div>
  );
}
