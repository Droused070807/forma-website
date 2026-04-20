export function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-12 px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-6">
          <span className="text-sm font-semibold text-on-surface">
            Forma<span className="text-ice">.</span>
          </span>
          <a
            href="/privacy"
            className="text-xs text-on-variant transition hover:text-on-surface"
          >
            Privacy Policy
          </a>
          <a
            href="mailto:support@forma.app"
            className="text-xs text-on-variant transition hover:text-on-surface"
          >
            Support
          </a>
        </div>
        <p className="text-xs text-on-variant">
          © {new Date().getFullYear()} Forma. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
