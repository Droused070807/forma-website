export function Feel() {
  return (
    <section className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-xl mx-auto text-center mb-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-ice mb-5">
            What people say
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.1] tracking-tight text-on-surface">
            They just train.
            <br />
            Forma does the rest.
          </h2>
        </div>

        {/* Asymmetric quote layout — not a card grid */}
        <div className="space-y-16 max-w-3xl mx-auto">
          <Quote
            text="I stopped thinking about what to do at the gym. I just open Forma and train. 8 weeks in, bench is up 20 lb."
            name="Marcus"
            context="Intermediate &middot; 4 days/week"
          />
          <Quote
            text="This is the first app that adjusts when I miss days instead of making me feel guilty about it."
            name="Sarah"
            context="Beginner &middot; Home gym"
          />
          <Quote
            text="The deload week surprised me. I didn&rsquo;t ask for it. Forma just knew. Came back stronger."
            name="James"
            context="Intermediate &middot; Full gym"
          />
        </div>
      </div>
    </section>
  );
}

function Quote({
  text,
  name,
  context,
}: {
  text: string;
  name: string;
  context: string;
}) {
  return (
    <div className="border-l-2 border-white/[0.06] pl-8 md:pl-12">
      <p className="text-[20px] md:text-[24px] leading-relaxed font-light text-on-surface/90 italic">
        &ldquo;{text}&rdquo;
      </p>
      <div className="mt-5 flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-container border border-white/[0.06] flex items-center justify-center text-[12px] font-semibold text-ice">
          {name[0]}
        </div>
        <div>
          <p className="text-[13px] font-medium text-on-surface">{name}</p>
          <p
            className="text-[11px] text-on-variant"
            dangerouslySetInnerHTML={{ __html: context }}
          />
        </div>
      </div>
    </div>
  );
}
