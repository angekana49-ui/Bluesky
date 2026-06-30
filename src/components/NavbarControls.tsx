"use client";

import { useEffect, useState } from "react";

type Theme = "day" | "night";

export default function NavbarControls({ links }: { links: string[] }) {
  const [active, setActive] = useState("Product");
  const [theme, setTheme] = useState<Theme>("day");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("bluesky-theme");
    const initialTheme: Theme =
      storedTheme === "night" || (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
        ? "night"
        : "day";
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    if (theme === "night") {
      document.documentElement.classList.add("night");
    } else {
      document.documentElement.classList.remove("night");
    }
    window.localStorage.setItem("bluesky-theme", theme);
  }, [theme]);

  return (
    <>
      <div className="bluesky-nav-pill-wrap hidden md:flex items-center gap-1 rounded-full border border-slate-200/80 bg-slate-50/90 px-1.5 py-1">
        {links.map((link) => (
          <button
            key={link}
            onClick={() => setActive(link)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
              active === link
                ? "bg-white text-black shadow-[0_1px_4px_rgba(15,23,42,0.08)]"
                : "text-slate-500 hover:text-slate-900"
            }`}
          >
            {link}
          </button>
        ))}
      </div>

      <button
        type="button"
        aria-label={`Switch to ${theme === "day" ? "night" : "day"} theme`}
        aria-pressed={theme === "night"}
        onClick={() => setTheme((v) => (v === "day" ? "night" : "day"))}
        className="group relative inline-flex h-10 w-[4.8rem] items-center overflow-hidden rounded-full border border-white/70 bg-white/70 p-1 shadow-[0_10px_24px_rgba(15,23,42,0.08)] backdrop-blur-md transition-transform hover:-translate-y-0.5 active:scale-95"
      >
        {/* Track */}
        <span className={`absolute inset-0 rounded-full transition-colors duration-500 ${
          theme === "day"
            ? "bg-[linear-gradient(180deg,#dfeef9_0%,#f8fbfe_100%)]"
            : "bg-[linear-gradient(180deg,#111b2a_0%,#0b1220_100%)]"
        }`} />

        {/* Knob — spring easing */}
        <span className={`absolute left-1 top-1 flex h-8 w-8 items-center justify-center rounded-full shadow-[0_4px_14px_rgba(15,23,42,0.16)] transition-all duration-[460ms] [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] ${
          theme === "day" ? "translate-x-0 bg-white" : "translate-x-[1.9rem] bg-slate-950"
        }`}>
          {/* Sun */}
          <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            theme === "day" ? "opacity-100 scale-100" : "opacity-0 scale-50 rotate-90"
          }`}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-amber-400" aria-hidden="true">
              <circle cx="7" cy="7" r="3" fill="currentColor" />
              <path d="M7 1.5V3M7 11V12.5M1.5 7H3M11 7H12.5M3.1 3.1L4.1 4.1M9.9 9.9L10.9 10.9M3.1 10.9L4.1 9.9M9.9 4.1L10.9 3.1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </span>
          {/* Full moon */}
          <span className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            theme === "night" ? "opacity-100 scale-100" : "opacity-0 scale-50 -rotate-90"
          }`}>
            <svg width="13" height="13" viewBox="0 0 13 13" aria-hidden="true">
              <defs>
                <radialGradient id="moon-glow" cx="38%" cy="35%" r="60%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#bae6fd" />
                </radialGradient>
              </defs>
              <circle cx="6.5" cy="6.5" r="5.2" fill="url(#moon-glow)" />
            </svg>
          </span>
        </span>

        {/* Single label — right in day mode, left in night mode (original pattern) */}
        <span className={`absolute top-1/2 -translate-y-1/2 text-[9px] font-semibold transition-all duration-500 ${
          theme === "day"
            ? "left-[2.95rem] text-slate-500 opacity-90"
            : "left-3 text-slate-200 opacity-90"
        }`}>
          {theme === "day" ? "Day" : "Night"}
        </span>
      </button>
    </>
  );
}
