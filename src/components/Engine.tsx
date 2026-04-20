export function Engine() {
  return (
    <section className="relative px-6 py-32 md:py-40">
      {/* Subtle glow behind the card */}
      <div className="glow-orb pointer-events-none absolute top-1/2 right-[10%] -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-ice blur-[200px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="md:flex md:items-start md:gap-20 lg:gap-32">
          {/* Left: copy */}
          <div className="md:w-1/2 md:sticky md:top-32">
            <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-ice mb-5">
              The engine
            </p>
            <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.1] tracking-tight text-on-surface mb-8">
              It feels like a coach
              <br />
              who <span className="font-serif italic">knows you.</span>
            </h2>
            <p className="text-[16px] leading-relaxed text-on-variant max-w-md mb-10">
              Every decision is built from your actual performance. Not templates.
              Not AI guesses. Deterministic logic that reads your history and
              writes tomorrow.
            </p>

            <div className="space-y-6">
              <EnginePoint
                label="Progression"
                text="Tracks your sets across sessions. Increases weight only when you consistently hit the top of your range."
              />
              <EnginePoint
                label="Recovery"
                text="Detects missed days, low nutrition, and long gaps. Adjusts volume and intensity without asking."
              />
              <EnginePoint
                label="Periodization"
                text="After 4 weeks of hitting targets, programs a deload automatically. You never think about it."
              />
            </div>
          </div>

          {/* Right: mock UI card */}
          <div className="md:w-1/2 mt-16 md:mt-0">
            <div className="rounded-2xl border border-white/[0.06] bg-[#0d0d0d] overflow-hidden">
              {/* Mock brief */}
              <div className="p-7 border-b border-white/[0.04]">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-on-variant mb-3">
                  Forma Brief
                </p>
                <p className="text-[22px] font-semibold leading-snug tracking-tight text-on-surface mb-3">
                  Momentum is building.
                </p>
                <p className="text-[14px] leading-relaxed text-on-variant">
                  3 of 4 sessions done this week. Bench press moved up 5 lb.
                  Keep compounds clean and leave a little in reserve today.
                </p>
              </div>

              {/* Mock workout preview */}
              <div className="p-7 border-b border-white/[0.04]">
                <div className="flex items-center justify-between mb-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-on-variant">
                    Today &middot; Upper
                  </p>
                  <span className="text-[12px] font-medium text-ice">36 min</span>
                </div>
                <div className="space-y-3">
                  <MockExercise name="Bench Press" detail="3 &times; 8-12 &middot; 140 lb" />
                  <MockExercise name="Row" detail="3 &times; 8-12 &middot; 90 lb" />
                  <MockExercise name="Shoulder Press" detail="3 &times; 8-12 &middot; 70 lb" />
                  <MockExercise name="Curl" detail="3 &times; 8-12 &middot; 30 lb" />
                  <MockExercise name="Tricep Pushdown" detail="3 &times; 8-12 &middot; 50 lb" />
                </div>
              </div>

              {/* Mock momentum */}
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

function EnginePoint({ label, text }: { label: string; text: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-ice" />
      <div>
        <p className="text-[14px] font-medium text-on-surface mb-1">{label}</p>
        <p className="text-[14px] leading-relaxed text-on-variant">{text}</p>
      </div>
    </div>
  );
}

function MockExercise({ name, detail }: { name: string; detail: string }) {
  return (
    <div className="flex items-center justify-between py-2">
      <span className="text-[14px] font-medium text-on-surface">{name}</span>
      <span
        className="font-mono text-[12px] text-on-variant"
        dangerouslySetInnerHTML={{ __html: detail }}
      />
    </div>
  );
}
