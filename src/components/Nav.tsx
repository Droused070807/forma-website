export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.04] bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="text-lg font-semibold tracking-tight text-on-surface">
          Forma<span className="text-ice">.</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#how" className="text-sm text-on-variant transition hover:text-on-surface">
            How it works
          </a>
          <a href="#features" className="text-sm text-on-variant transition hover:text-on-surface">
            Features
          </a>
          <a href="#pricing" className="text-sm text-on-variant transition hover:text-on-surface">
            Pricing
          </a>
        </div>
        <a
          href="#download"
          className="rounded-full bg-on-surface px-5 py-2 text-sm font-medium text-black transition hover:bg-white"
        >
          Download
        </a>
      </div>
    </nav>
  );
}
