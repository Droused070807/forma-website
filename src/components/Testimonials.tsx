const testimonials = [
  {
    quote:
      "I stopped thinking about what to do at the gym. I just open Forma and train. It's been 8 weeks and my bench is up 20 lb.",
    name: 'Marcus',
    detail: 'Intermediate · 4 days/week',
  },
  {
    quote:
      "I've tried 5 fitness apps. This is the first one that actually adjusts when I miss days instead of making me feel guilty.",
    name: 'Sarah',
    detail: 'Beginner · Home gym',
  },
  {
    quote:
      "The deload week surprised me. I didn't ask for it — Forma just knew I needed it. Came back stronger the next week.",
    name: 'James',
    detail: 'Intermediate · Full gym',
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-center font-mono text-xs uppercase tracking-[0.3em] text-ice">
          From real users
        </p>
        <h2 className="mb-16 text-center text-4xl font-semibold tracking-tight text-on-surface">
          They just train. Forma does the rest.
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-white/[0.06] bg-container p-6"
            >
              <p className="mb-6 text-sm leading-relaxed text-on-surface/90">
                "{t.quote}"
              </p>
              <div>
                <p className="text-sm font-medium text-on-surface">{t.name}</p>
                <p className="text-xs text-on-variant">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
