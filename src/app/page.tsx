export default function Home() {
  return (
    <main>
      {/* ── Nav ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-2xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <span className="text-[15px] font-semibold tracking-tight">
            Forma<span className="text-[#6b7fff]">.</span>
          </span>
          <a
            href="#get"
            className="text-[13px] text-[#7a7a7a] transition-colors hover:text-[#f0f0f0]"
          >
            Get the app &rarr;
          </a>
        </div>
      </nav>

      {/* ── 1. Opening ── */}
      <section className="min-h-[100svh] flex items-end md:items-center px-6 pb-24 pt-28 md:pb-0">
        <div className="max-w-6xl mx-auto w-full">
          <h1 className="animate-in font-serif italic text-[clamp(2.8rem,7.5vw,6.5rem)] leading-[0.92] tracking-tight max-w-3xl">
            Your gym app
            <br />
            shouldn&apos;t need
            <br />
            a tutorial.
          </h1>
          <p className="animate-in delay-1 mt-10 max-w-md text-[17px] leading-[1.65] text-[#7a7a7a]">
            Forma tells you what to lift, how heavy, and how many reps.
            Tomorrow adjusts based on what you actually did. No planning. No thinking.
          </p>
          <div className="animate-in delay-2 mt-10 flex items-center gap-4">
            <a
              href="#get"
              className="inline-flex h-11 items-center rounded-full bg-[#f0f0f0] px-6 text-[13px] font-semibold text-black"
            >
              Download for iOS
            </a>
            <span className="text-[13px] text-[#7a7a7a]">7-day free trial</span>
          </div>
        </div>
      </section>

      {/* ── 2. The contrast ── */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-[clamp(1.4rem,3vw,2.2rem)] leading-[1.4] text-[#7a7a7a]">
              Most fitness apps give you a plan and hope you follow it.
              <span className="text-[#f0f0f0]"> Forma watches what you actually do</span>
              &mdash;then rewrites tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. What a day looks like ── */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#6b7fff] mb-16">
            A day with Forma
          </p>

          <div className="md:flex md:gap-20 lg:gap-32">
            <div className="md:w-1/2 space-y-20">
              <Moment
                time="Morning"
                text="You open the app. Your workout is there — exercises, sets, reps, and exact weight targets calculated from your history. A coaching brief tells you what today is about and why."
              />
              <Moment
                time="During"
                text="Follow the screen. Log each set with a tap. Need form help? Tap the exercise for a visual guide and coaching cue. The rest timer learns your pace. Your phone stays in your pocket between sets."
              />
              <Moment
                time="After"
                text="Two taps to wrap up. Forma logs the day, reads your performance, and quietly rebuilds tomorrow. Share your session with a premium workout card — dark background, key lifts, Forma wordmark."
              />
            </div>

            <div className="md:w-1/2 mt-16 md:mt-0 md:sticky md:top-28 md:self-start">
              <div className="rounded-2xl border border-white/[0.05] bg-[#0d0d0d] overflow-hidden">
                <div className="px-6 pt-6 pb-5 border-b border-white/[0.04]">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7a7a7a] mb-2">
                    Wednesday &middot; Pull
                  </p>
                  <p className="text-[20px] font-semibold leading-snug tracking-tight mb-2">
                    Barbell Row is up 10 lb this month.
                  </p>
                  <p className="text-[13px] leading-relaxed text-[#7a7a7a]">
                    3 of 4 sessions done. Keep today controlled.
                  </p>
                </div>
                <div className="px-6 py-4 space-y-0">
                  <ExRow name="Barbell Row" meta="4 &times; 5-8 &middot; 105 lb" active />
                  <ExRow name="Lat Pulldown" meta="4 &times; 5-8 &middot; 95 lb" />
                  <ExRow name="Face Pull" meta="3 &times; 8-12 &middot; 40 lb" />
                  <ExRow name="Bicep Curl" meta="3 &times; 8-12 &middot; 30 lb" />
                  <ExRow name="Rear Delt Fly" meta="3 &times; 8-12 &middot; 15 lb" />
                </div>
                <div className="px-6 py-4 border-t border-white/[0.04] flex justify-between items-center">
                  <span className="text-[11px] text-[#7a7a7a]">Momentum</span>
                  <span className="text-[12px] font-semibold text-[#6b7fff]">Locked in</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. What happens under the hood ── */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-20">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold leading-[1.1] tracking-tight">
              You don&apos;t see any of this.
              <br />
              <span className="text-[#7a7a7a]">It just happens.</span>
            </h2>
          </div>

          <div className="space-y-0">
            <Rule
              trigger="You rowed 95 &times; 12 three sessions in a row"
              result="Next target: 105 &times; 8. Auto-progressed."
            />
            <Rule
              trigger="You missed Thursday and Friday"
              result="Monday is shorter, lighter. No guilt screen."
            />
            <Rule
              trigger="You hit every target for 4 straight weeks"
              result="Deload week. Volume drops 30%. Automatic."
            />
            <Rule
              trigger="You haven&apos;t trained in 10 days"
              result="Restart session: 3 exercises, 2 sets, easy weights."
            />
            <Rule
              trigger="It&apos;s 9 PM and you didn&apos;t train"
              result="Rest day auto-logged. Tomorrow adjusts."
            />
            <Rule
              trigger="You finish your last set"
              result="Rest timer learns your pace for next time."
            />
            <Rule
              trigger="Three weeks unbroken"
              result="Your brief says it. Momentum is real."
            />
          </div>
        </div>
      </section>

      {/* ── 5. Recovery intelligence ── */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="md:flex md:gap-20 lg:gap-32 md:items-start">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#6b7fff] mb-5">
                Recovery
              </p>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold leading-[1.1] tracking-tight mb-6">
                See your body&apos;s state
                <br />
                <span className="text-[#7a7a7a]">at a glance.</span>
              </h2>
              <p className="text-[15px] leading-relaxed text-[#7a7a7a] max-w-sm mb-8">
                Forma tracks which muscles you trained and when. A live recovery
                heatmap shows what&apos;s fatigued, what&apos;s recovering, and
                what&apos;s ready. No wearable required.
              </p>
              <div className="space-y-4">
                <RecoveryPoint
                  color="#FF6B6B"
                  text="Chest and shoulders trained yesterday &mdash; still resting"
                />
                <RecoveryPoint
                  color="#F5A524"
                  text="Back recovering from Tuesday &mdash; almost ready"
                />
                <RecoveryPoint
                  color="#5B7CFF"
                  text="Legs fully recovered &mdash; ready to train"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-2xl border border-white/[0.04] bg-[#0d0d0d] p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#7a7a7a]">
                    Recovery status
                  </span>
                  <span className="text-[12px] text-[#FF6B6B]">Upper body resting</span>
                </div>
                <div className="space-y-2">
                  <RecoveryRow name="Chest" status="Resting" color="#FF6B6B" />
                  <RecoveryRow name="Shoulders" status="Resting" color="#FF6B6B" />
                  <RecoveryRow name="Back" status="Recovering" color="#F5A524" />
                  <RecoveryRow name="Biceps" status="Recovering" color="#F5A524" />
                  <RecoveryRow name="Core" status="Ready" color="#5B7CFF" />
                  <RecoveryRow name="Quads" status="Ready" color="#5B7CFF" />
                  <RecoveryRow name="Hamstrings" status="Fresh" color="#3a3a3a" />
                  <RecoveryRow name="Calves" status="Fresh" color="#3a3a3a" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. What makes Forma different ── */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#6b7fff] mb-16">
            Built different
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureBlock
              title="Exercise form guides"
              text="Tap any exercise for a visual guide and coaching cue. YouTube link for deeper form checks. No guessing."
            />
            <FeatureBlock
              title="Metric &amp; imperial"
              text="Set your units in onboarding. Everything — weights, body weight, trends — follows your preference. lb or kg."
            />
            <FeatureBlock
              title="Shareable workout cards"
              text="After every session, share a premium dark card with your workout name, key lifts, and the Forma wordmark."
            />
            <FeatureBlock
              title="Edit past workouts"
              text="Tap any workout in your history to adjust sets, reps, or weights. Add or remove sets. Delete workouts you don't want."
            />
            <FeatureBlock
              title="Body composition context"
              text="Height and weight input gives Forma the context to calibrate fuel guidance and track your body trend over 12 weeks."
            />
            <FeatureBlock
              title="Try before you pay"
              text="Complete your first workout before seeing the paywall. Forma earns your subscription — it doesn't gate it."
            />
          </div>
        </div>
      </section>

      {/* ── 7. Who this is for ── */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <p className="text-[clamp(1.4rem,3vw,2.2rem)] leading-[1.4] text-[#7a7a7a] max-w-3xl">
            For the beginner who doesn&apos;t know where to start.
            <br />
            For the lifter who&apos;s been doing the same workout for six months.
            <br />
            For anyone who wants to <span className="text-[#f0f0f0]">just train</span> without
            becoming a spreadsheet person.
          </p>
        </div>
      </section>

      {/* ── 8. Social proof ── */}
      <section className="px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto max-w-2xl">
          <div className="rounded-2xl border border-white/[0.04] bg-[#0d0d0d] p-8 md:p-12">
            <p className="font-serif italic text-[clamp(1.2rem,2.5vw,1.6rem)] leading-[1.5] text-[#f0f0f0] mb-6">
              &ldquo;I&apos;ve used Fitbod, Strong, and Hevy. Forma is the only one I&apos;ve actually stuck with.&rdquo;
            </p>
            <p className="text-[13px] text-[#7a7a7a]">&mdash; Early access member</p>
          </div>
        </div>
      </section>

      {/* ── 9. Price ── */}
      <section id="pricing" className="px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto md:flex md:items-start md:justify-between md:gap-16">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold leading-[1.1] tracking-tight mb-5">
              $9.99/month.
              <br />
              <span className="text-[#7a7a7a]">Everything. No tiers.</span>
            </h2>
            <p className="text-[15px] leading-relaxed text-[#7a7a7a] max-w-sm">
              7-day free trial. Your first workout is free before you even see the paywall.
              Cancel from your phone anytime.
            </p>
          </div>
          <div className="md:w-1/2 md:max-w-xs md:ml-auto space-y-3">
            <PriceItem text="Evidence-based Push/Pull/Legs splits" />
            <PriceItem text="Auto-progression when you&apos;re ready" />
            <PriceItem text="Automatic deload weeks" />
            <PriceItem text="Smart rest timer that learns your pace" />
            <PriceItem text="Muscle recovery heatmap" />
            <PriceItem text="Weekly AI coaching recaps" />
            <PriceItem text="PR detection and workout history" />
            <PriceItem text="Exercise form guides with coaching cues" />
            <PriceItem text="Shareable post-workout cards" />
            <PriceItem text="Metric and imperial support" />
            <PriceItem text="Every future feature" />
          </div>
        </div>
      </section>

      {/* ── 10. Close ── */}
      <section id="get" className="px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif italic text-[clamp(2.2rem,5.5vw,4.2rem)] leading-[0.95] tracking-tight mb-6">
            Your first workout
            <br />
            is already built.
          </h2>
          <p className="text-[16px] leading-relaxed text-[#7a7a7a] max-w-md mb-10">
            Four questions. Under two minutes. Then you&apos;re training.
          </p>
          <a
            href="https://apps.apple.com/app/forma-smart-training/id6762664309"
            className="inline-flex h-12 items-center rounded-full bg-[#f0f0f0] px-7 text-[14px] font-semibold text-black"
          >
            Download for iOS &rarr;
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.03] px-6 py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <span className="text-[12px] text-[#7a7a7a]">
            &copy; {new Date().getFullYear()} Forma
          </span>
          <div className="flex items-center gap-5">
            <a href="/privacy" className="text-[11px] text-[#7a7a7a] hover:text-[#f0f0f0] transition-colors">
              Privacy
            </a>
            <a href="mailto:support@formacoach.app" className="text-[11px] text-[#7a7a7a] hover:text-[#f0f0f0] transition-colors">
              Support
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ── Inline components ── */

function Moment({ time, text }: { time: string; text: string }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#6b7fff]/60 mb-3">
        {time}
      </p>
      <p className="text-[16px] leading-[1.7] text-[#7a7a7a]">{text}</p>
    </div>
  );
}

function ExRow({ name, meta, active }: { name: string; meta: string; active?: boolean }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-white/[0.03] last:border-0">
      <span className={`text-[13px] font-medium ${active ? 'text-[#f0f0f0]' : 'text-[#f0f0f0]/50'}`}>
        {name}
      </span>
      <span
        className={`font-mono text-[11px] ${active ? 'text-[#6b7fff]' : 'text-[#7a7a7a]/60'}`}
        dangerouslySetInnerHTML={{ __html: meta }}
      />
    </div>
  );
}

function Rule({ trigger, result }: { trigger: string; result: string }) {
  return (
    <div className="border-t border-white/[0.04] py-8 md:py-10 md:flex md:gap-16">
      <p className="text-[15px] text-[#7a7a7a] md:w-1/2" dangerouslySetInnerHTML={{ __html: trigger }} />
      <p className="text-[15px] font-medium text-[#f0f0f0] mt-2 md:mt-0 md:w-1/2" dangerouslySetInnerHTML={{ __html: result }} />
    </div>
  );
}

function FeatureBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl border border-white/[0.04] bg-[#0d0d0d] p-6">
      <h3 className="text-[15px] font-semibold text-[#f0f0f0] mb-2 tracking-tight">{title}</h3>
      <p className="text-[13px] leading-relaxed text-[#7a7a7a]">{text}</p>
    </div>
  );
}

function PriceItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-2 h-1 w-1 rounded-full bg-[#6b7fff] shrink-0" />
      <span className="text-[14px] leading-relaxed text-[#7a7a7a]" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}

function RecoveryPoint({ color, text }: { color: string; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1.5 h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: color }} />
      <span className="text-[14px] leading-relaxed text-[#7a7a7a]" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}

function RecoveryRow({ name, status, color }: { name: string; status: string; color: string }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-white/[0.03] last:border-0">
      <span className="text-[13px] font-medium text-[#f0f0f0]/70">{name}</span>
      <span className="text-[12px] font-medium" style={{ color }}>{status}</span>
    </div>
  );
}
