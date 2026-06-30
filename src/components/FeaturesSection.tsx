import React from "react";
import type { SiteConfig } from "./LandingPage";

const statusColor: Record<string, string> = {
  live: "#22c55e",
  syncing: "#f97316",
};

export default function FeaturesSection({ config }: { config: SiteConfig }) {
  const { features } = config;
  const activeFeature: number = 0;

  return (
    <section className="cirrus-features relative overflow-hidden bg-[#f4f8fb] py-20 sm:py-24">
      <div className="cirrus-veil absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.86),rgba(255,255,255,0)_45%)]" />
      <div className="cirrus-veil absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />
      <div className="cirrus-veil absolute inset-x-0 top-24 h-40 bg-[radial-gradient(circle_at_50%_0,rgba(255,255,255,0.7),rgba(255,255,255,0)_72%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-14">
          <h2 className="mx-auto max-w-3xl animate-fade-up text-[clamp(1.75rem,8vw,3.15rem)] font-black leading-[1.04] tracking-tight text-slate-950 nt-primary sm:text-[clamp(2rem,4vw,3.15rem)]">
            {features.sectionHeadline.split("rather").map((part, i) =>
              i === 0 ? (
                <React.Fragment key={i}>
                  {part}
                  <em className="not-italic" style={{ fontFamily: "Georgia, serif" }}>
                    rather
                  </em>
                </React.Fragment>
              ) : (
                <React.Fragment key={i}>
                  <br />
                  <em className="not-italic" style={{ fontFamily: "Georgia, serif" }}>
                    not{" "}
                  </em>
                  {part.replace("not ", "")}
                </React.Fragment>
              )
            )}
          </h2>
          <p className="mx-auto mt-4 max-w-xl animate-fade-up text-[13px] leading-6 text-slate-500 nt-secondary sm:text-sm sm:leading-7" style={{ animationDelay: "90ms" }}>
            {features.sectionSub}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 sm:gap-5">
          {features.items.map((item, i) => (
            <div
              key={i}
              className={`group relative flex flex-col gap-5 overflow-hidden rounded-[22px] border bg-white p-5 shadow-[0_14px_36px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(15,23,42,0.09)] animate-fade-up sm:rounded-[24px] sm:p-6 ${
                i === activeFeature ? "border-slate-300 shadow-[0_20px_48px_rgba(15,23,42,0.1)]" : "border-white/75"
              }`}
              style={{ animationDelay: `${120 + i * 90}ms` }}
            >
              <div className={`pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.24)_20%,rgba(255,255,255,0)_36%)] bg-[length:220%_100%] animate-shine transition-opacity ${i === activeFeature ? "opacity-75" : "opacity-0 group-hover:opacity-100"}`} />
              <div className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-xs font-semibold text-white shadow-[0_12px_20px_rgba(15,23,42,0.16)] transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11 sm:text-sm ${i === activeFeature ? "scale-105" : ""}`}>
                {item.icon}
              </div>

              <div>
                <h3 className="text-[14px] font-semibold tracking-tight text-slate-950 sm:text-[15px]">{item.title}</h3>
                <p className="mt-2 text-[12px] leading-6 text-slate-500 sm:text-[13px] sm:leading-7">{item.description}</p>
              </div>

              {item.stats && (
                <div className={`relative mt-auto rounded-[18px] bg-slate-50/90 p-4 transition-colors group-hover:bg-slate-50 ${i === activeFeature ? "bg-white" : ""}`}>
                  {i === 0 ? (
                    <div className="flex flex-col gap-2.5">
                      {item.stats.map((s) => (
                        <div key={s.label} className="flex items-center justify-between">
                          <span className="text-[11px] text-slate-400">{s.label}</span>
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${i === activeFeature ? "animate-pulse-soft" : ""}`}
                              style={{ background: statusColor[s.value] || "#cbd5e1" }}
                            />
                            <span
                              className="text-[10px] font-medium"
                              style={{ color: statusColor[s.value] || "#94a3b8" }}
                            >
                              {s.value}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : i === 1 ? (
                    <div className="flex flex-col gap-3">
                      {item.stats.map((s, si) => {
                        const colors = ["#4f46e5", "#f97316", "#22c55e"];
                        const widths = ["100%", "55%", "22%"];
                        return (
                          <div key={s.label} className="flex items-center gap-3">
                            <span className="w-16 text-[10px] text-slate-400">{s.label}</span>
                            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white">
                              <div
                                className={`h-full rounded-full ${i === activeFeature ? "animate-fade-up" : ""}`}
                                style={{ width: widths[si], background: colors[si] }}
                              />
                            </div>
                            <span className="w-10 text-right text-[10px] text-slate-500">{s.value}</span>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2.5">
                      {item.stats.map((s) => (
                        <div key={s.label} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className={`h-1.5 w-1.5 rounded-full bg-indigo-500 ${i === activeFeature ? "animate-pulse-soft" : ""}`} />
                            <span className="text-[11px] text-slate-400">{s.label}</span>
                          </div>
                          <span className="text-[11px] font-semibold text-slate-950">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
