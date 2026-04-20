export function Proof() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-center">
          <Stat value="4.9" label="App Store" />
          <span className="hidden h-4 w-px bg-white/[0.08] md:block" />
          <Stat value="12k+" label="Sessions logged" />
          <span className="hidden h-4 w-px bg-white/[0.08] md:block" />
          <Stat value="87%" label="Weekly retention" />
          <span className="hidden h-4 w-px bg-white/[0.08] md:block" />
          <Stat value="0" label="Decisions required" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-2">
      <p className="text-2xl font-semibold tracking-tight text-on-surface md:text-3xl">
        {value}
      </p>
      <p className="mt-1 text-[12px] text-on-variant">{label}</p>
    </div>
  );
}
