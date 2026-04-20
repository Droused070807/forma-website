export function Footer() {
  return (
    <footer className="border-t border-white/[0.03] px-6 py-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <span className="text-[13px] text-on-variant">
          &copy; {new Date().getFullYear()} Forma
        </span>
        <div className="flex items-center gap-6">
          <a
            href="/privacy"
            className="text-[12px] text-on-variant transition-colors hover:text-on-surface"
          >
            Privacy
          </a>
          <a
            href="mailto:support@formacoach.app"
            className="text-[12px] text-on-variant transition-colors hover:text-on-surface"
          >
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}
