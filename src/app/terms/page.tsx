import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use — Forma',
};

export default function Terms() {
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
          Terms of Use
        </h1>
        <p className="mb-12 text-sm text-on-variant">Effective April 28, 2026</p>

        <div className="space-y-10 text-sm leading-relaxed text-on-variant">
          <Section title="Acceptance">
            By downloading, creating an account, or using Forma, you agree to
            these Terms of Use. If you do not agree, do not use the app. You
            must be at least 13 years old to use Forma.
          </Section>

          <Section title="Subscription and billing">
            Forma offers a 7-day free trial followed by an auto-renewing
            subscription. Plans are billed as monthly ($9.99/month) or annual
            ($59.99/year). Payment is charged to your Apple ID at the time of
            purchase confirmation. Your subscription renews automatically unless
            cancelled at least 24 hours before the end of the current billing
            period. You can manage or cancel your subscription at any time in
            your iPhone&apos;s Settings under Subscriptions. Refunds are subject
            to Apple&apos;s standard refund policy.
          </Section>

          <Section title="Use of the service">
            Forma is a personal fitness planning tool. Your license to use Forma
            is personal, non-transferable, and non-commercial. Forma is not a
            substitute for professional medical, nutritional, or fitness advice.
            Always consult a qualified physician before beginning any exercise
            program. Stop exercising and seek medical attention if you experience
            pain, dizziness, shortness of breath, or unusual discomfort.
          </Section>

          <Section title="Your account">
            You are responsible for keeping your account credentials secure.
            Forma uses email OTP and Apple Sign In for authentication — do not
            share your verification codes with anyone. You can delete your
            account at any time in Settings, which removes your Forma data from
            our servers and clears local data on your device.
          </Section>

          <Section title="AI-generated content">
            Forma uses AI to generate certain in-app content, including daily
            briefs and weekly training recaps. This content is based on your
            training history and is informational only. AI outputs are not
            personalized medical or fitness advice and may occasionally contain
            errors. Forma&apos;s workout plans and progressive overload logic are
            rule-based and are not AI-generated.
          </Section>

          <Section title="Intellectual property">
            All content, design, code, and trademarks in Forma are owned by
            Hunter Gray or licensed for use in the app. You may not copy,
            reproduce, distribute, or create derivative works from any part of
            Forma without prior written permission.
          </Section>

          <Section title="Limitation of liability">
            Forma is provided &quot;as is&quot; without warranties of any kind.
            We do not guarantee specific fitness results. To the maximum extent
            permitted by law, Hunter Gray shall not be liable for any indirect,
            incidental, or consequential damages arising from your use of the
            app, including injury from exercise.
          </Section>

          <Section title="Governing law">
            These Terms are governed by the laws of the United States and the
            state in which Hunter Gray operates, without regard to conflict of
            law principles. Any disputes shall be resolved in the applicable
            courts of that jurisdiction.
          </Section>

          <p className="pt-6 border-t border-white/[0.06]">
            Questions about these Terms? Contact{' '}
            <a
              href="mailto:support@formacoach.app"
              className="text-ice hover:underline"
            >
              support@formacoach.app
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
