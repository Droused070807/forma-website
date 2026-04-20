export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-2xl border-b border-white/[0.03]">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <a href="#" className="text-[15px] font-semibold tracking-tight">
          Forma<span className="text-ice">.</span>
        </a>
        <a
          href="#download"
          className="text-[13px] font-medium text-on-variant transition-colors hover:text-on-surface"
        >
          Get the app &rarr;
        </a>
      </div>
    </nav>
  );
}
