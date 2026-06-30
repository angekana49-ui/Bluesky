"use client";
import React, { useEffect, useState } from "react";
import { SiteConfig } from "./LandingPage";

const statusColors: Record<string, { bg: string; text: string }> = {
  blue: { bg: "#eff6ff", text: "#3b82f6" },
  gray: { bg: "#f3f4f6", text: "#9ca3af" },
  orange: { bg: "#fff7ed", text: "#f97316" },
  yellow: { bg: "#fefce8", text: "#ca8a04" },
  "": { bg: "transparent", text: "transparent" },
};

export default function InboxSection({ config }: { config: SiteConfig }) {
  const { inbox } = config;
  const [activeThread, setActiveThread] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveThread((value) => (value + 1) % inbox.threads.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, [inbox.threads.length]);

  return (
    <section
      className="cirrus-inbox relative overflow-hidden py-28"
      style={{
        background: "linear-gradient(180deg, #f4f8fb 0%, #eef4f9 42%, #e4edf4 100%)",
      }}
    >
      <div className="cirrus-veil pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.8),rgba(255,255,255,0)_38%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.6),rgba(255,255,255,0)_28%)]" />
      <div className="cirrus-veil pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <div>
            <h2 className="mb-5 animate-fade-up text-[clamp(1.95rem,8vw,3.4rem)] font-black leading-[0.98] tracking-tight text-slate-950 nt-primary sm:mb-6 sm:text-[clamp(2.2rem,4vw,3.4rem)]">
              {inbox.headline}{" "}
              <br />
              <em className="not-italic" style={{ fontFamily: "Georgia, serif" }}>
                {inbox.highlightedWord}
              </em>
            </h2>
            <p className="mb-7 max-w-md animate-fade-up text-[13px] leading-6 text-slate-500 nt-secondary sm:mb-8 sm:text-sm sm:leading-7" style={{ animationDelay: "90ms" }}>
              {inbox.description}
            </p>

            <div className="mb-7 flex flex-col gap-3.5 sm:mb-8 sm:gap-4">
              {inbox.bullets.map((b, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 animate-fade-up"
                  style={{ animationDelay: `${120 + i * 70}ms` }}
                >
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-slate-950">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 4L3.5 6L6.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-slate-950 nt-primary sm:text-[13px]">{b.title}</p>
                    <p className="mt-0.5 text-[11px] text-slate-500 nt-secondary sm:text-[12px]">{b.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2.5 text-[12px] font-medium text-white shadow-[0_14px_30px_rgba(15,23,42,0.16)] transition-transform hover:-translate-y-0.5 hover:bg-slate-800">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Open inbox demo
              </button>
              <button className="flex items-center gap-1 text-[12px] text-slate-500 nt-secondary transition-colors hover:text-slate-900">
                See the underlying model
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 6h7M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="group relative overflow-hidden rounded-[24px] border border-white/80 bg-white shadow-[0_26px_70px_rgba(15,23,42,0.11)] transition-transform duration-300 hover:-translate-y-1 sm:rounded-[28px]">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.26)_18%,rgba(255,255,255,0)_36%)] bg-[length:220%_100%] animate-shine opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="flex items-center justify-between border-b border-slate-200/80 px-3 py-3 sm:px-4">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-slate-950 sm:text-[12px]">Inbox</span>
                  <span className="rounded-full bg-slate-950 px-1.5 py-0.5 text-[9px] font-bold text-white">
                    {inbox.threads.length + 15}
                  </span>
                </div>
                <button className="flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[10px] text-slate-400">
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <path d="M1 2h7M2 4.5h5M3 7h3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                  Filter threads
                </button>
              </div>

              <div className="divide-y divide-slate-100">
                {inbox.threads.map((thread, i) => {
                  const sc = statusColors[thread.statusColor || ""];
                  return (
                    <div
                      key={i}
                      className={`flex cursor-pointer items-start gap-3 px-3 py-3 transition-colors sm:px-4 ${
                        i === activeThread ? "bg-slate-50/80" : "hover:bg-slate-50"
                      }`}
                    >
                      <div className={`mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-slate-200 transition-all ${i === activeThread ? "scale-105 bg-slate-950" : ""}`}>
                        <span className={`text-[8px] font-bold transition-colors ${i === activeThread ? "text-white" : "text-slate-500"}`}>{thread.initials}</span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-[11px] font-semibold text-slate-950">{thread.name}</span>
                          {thread.status && (
                            <span
                              className="rounded-full px-1.5 py-0.5 text-[8px] font-medium"
                              style={{ background: sc.bg, color: sc.text }}
                            >
                              {thread.status}
                            </span>
                          )}
                        </div>
                        <p className={`truncate text-[10px] leading-snug ${i === activeThread ? "text-slate-700" : "text-slate-500"}`}>
                          {thread.preview}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
