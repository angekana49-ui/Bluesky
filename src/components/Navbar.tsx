import type { SiteConfig } from "./LandingPage";
import NavbarControls from "./NavbarControls";

export default function Navbar({ config }: { config: SiteConfig }) {
  const links = ["Product", "Inbox", "Automations", "Pricing", "Changelog"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3">
      <div className="cirrus-nav mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/60 bg-white/70 px-3 py-2.5 shadow-[0_14px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black shadow-sm">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" fill="white" />
            </svg>
          </div>
          <div>
            <span className="block text-sm font-semibold tracking-tight text-black nt-primary">{config.brand.name}</span>
            <span className="block text-[10px] text-slate-500 nt-secondary">{config.brand.tagline}</span>
          </div>
        </div>

        <NavbarControls links={links} />

        <div className="flex items-center gap-2">
          <button className="hidden sm:inline-flex text-xs text-slate-500 hover:text-slate-900 px-3 py-1.5 transition-colors nt-secondary">
            Sign in
          </button>
          <button className="inline-flex items-center gap-1.5 rounded-full bg-slate-950 px-4 py-2 text-xs font-medium text-white shadow-[0_10px_20px_rgba(15,23,42,0.18)] transition-colors hover:bg-slate-800">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Start free
          </button>
        </div>
      </div>
    </nav>
  );
}
