import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Forma',
};

export default function Privacy() {
  return (
    <main className="min-h-screen px-6 py-24">
      <article className="mx-auto max-w-2xl">
        <a
          href="/"
          className="mb-12 inline-block text-sm text-on-variant transition hover:text-on-surface"
        >
          ← Back to Forma
        </a>

        <h1 className="mb-4 text-4xl font-semibold tracking-tight text-on-surface">
          Privacy Policy
        </h1>
        <p className="mb-12 text-sm text-on-variant">Effective April 19, 2026</p>

        <div className="space-y-10 text-sm leading-relaxed text-on-variant">
          <Section title="Data Forma uses">
            Email sign-in, profile settings, workout history, logged sets, daily
            check-ins, optional bodyweight, reminder settings, and daily brief
            inputs/outputs.
          </Section>

          <Section title="Why it is used">
            Forma uses this data to sign you in, generate workouts, adapt
            training, show progress, build body focus and trajectory signals, and
            send the optional evening reminder.
          </Section>

          <Section title="AI summaries">
            Workouts are decided by Forma logic, not AI. AI may only rewrite
            structured training-summary fields into clearer coaching language.
          </Section>

          <Section title="Sharing">
            Forma does not sell your personal data. Data is shared only with
            service providers needed to operate the app, including Supabase and
            optional AI rewriting services.
          </Section>

          <Section title="Delete account">
            You can delete your account in Settings. This removes your
            authentication account and clears Forma data stored on this device.
          </Section>

          <Section title="Health note">
            Forma is not medical advice. Stop if you feel pain, dizziness, or
            unusual discomfort, and consult a qualified professional for medical
            concerns or injuries.
          </Section>

          <p className="pt-6 border-t border-white/[0.06]">
            For privacy questions or deletion support, contact{' '}
            <a
              href="mailto:support@forma.app"
              className="text-ice hover:underline"
            >
              support@forma.app
            </a>
            .
          </p>
        </div>
      </article>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-white/[0.04] pb-8">
      <h2 className="mb-3 text-lg font-semibold text-on-surface">{title}</h2>
      <p>{children}</p>
    </div>
  );
}
