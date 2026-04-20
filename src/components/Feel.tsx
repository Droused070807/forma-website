export function Feel() {
  return (
    <section className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-xl mb-20">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-ice mb-5">
            Who it&apos;s for
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.1] tracking-tight text-on-surface">
            Built for people who want to train,
            <br />
            not become a programmer.
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.04] md:grid-cols-2">
          <Persona
            who="The beginner"
            problem="Doesn&apos;t know what exercises to do, what weight to use, or how to progress."
            solve="Forma builds every session from scratch. Just follow the screen."
          />
          <Persona
            who="The inconsistent lifter"
            problem="Trains for 3 weeks, misses a week, feels like they&apos;re starting over."
            solve="Forma detects the gap and builds a comeback session. No reset."
          />
          <Persona
            who="The intermediate who plateaued"
            problem="Been lifting for a year but weights haven&apos;t moved in months."
            solve="Forma tracks rep performance across sessions and auto-progresses when you&apos;re ready."
          />
          <Persona
            who="The person who hates planning"
            problem="Spends 20 minutes deciding what to do, then does the same workout anyway."
            solve="Open Forma. Your workout is there. Start."
          />
        </div>
      </div>
    </section>
  );
}

function Persona({
  who,
  problem,
  solve,
}: {
  who: string;
  problem: string;
  solve: string;
}) {
  return (
    <div className="bg-surface p-8 md:p-10 border-b border-r border-white/[0.03] last:border-b-0">
      <p className="text-[13px] font-semibold text-ice mb-4">{who}</p>
      <p
        className="text-[14px] leading-relaxed text-on-variant mb-4"
        dangerouslySetInnerHTML={{ __html: problem }}
      />
      <p
        className="text-[14px] leading-relaxed text-on-surface font-medium"
        dangerouslySetInnerHTML={{ __html: solve }}
      />
    </div>
  );
}
