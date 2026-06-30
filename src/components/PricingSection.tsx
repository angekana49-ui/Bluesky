"use client";

import React, { useEffect, useState } from "react";
import { SiteConfig } from "./LandingPage";

export default function PricingSection({ config }: { config: SiteConfig }) {
  const { pricing } = config;
  const [activePlan, setActivePlan] = useState(1);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActivePlan((value) => (value + 1) % pricing.plans.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, [pricing.plans.length]);

  return (
    <section
      className="bluesky-pricing relative py-28"
      style={{
        background: "linear-gradient(180deg, #e9f1f7 0%, #dfeaf2 35%, #d7e4ee 100%)",
      }}
    >
      <div className="bluesky-veil pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0,rgba(255,255,255,0.88),rgba(255,255,255,0)_42%)]" />
      <div className="bluesky-veil pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/90 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center sm:mb-14">
          <h2 className="mx-auto max-w-3xl animate-fade-up text-[clamp(1.9rem,8vw,3.35rem)] font-black leading-[1.02] tracking-tight text-slate-950 nt-primary sm:text-[clamp(2.1rem,4vw,3.35rem)]">
            {pricing.headline}{" "}
            <em className="not-italic" style={{ fontFamily: "Georgia, serif" }}>
              {pricing.highlightedWord}
            </em>
          </h2>
          <p className="mx-auto mt-4 max-w-xl animate-fade-up text-[13px] leading-6 text-slate-500 nt-secondary sm:text-sm sm:leading-7" style={{ animationDelay: "90ms" }}>
            {pricing.subheadline}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 sm:gap-5" onMouseLeave={() => setHoveredPlan(null)}>
          {pricing.plans.map((plan, index) => {
            const isFeatured = Boolean(plan.recommended);
            const isCustom = Boolean(plan.custom);
            const isFocused = hoveredPlan === index;
            const isDimmed = hoveredPlan !== null && hoveredPlan !== index;

            return (
              <div
                key={plan.name}
                tabIndex={0}
                onMouseEnter={() => setHoveredPlan(index)}
                onFocus={() => setHoveredPlan(index)}
                className={`group relative flex flex-col overflow-hidden rounded-[24px] border p-5 shadow-[0_16px_40px_rgba(15,23,42,0.06)] outline-none transition-all duration-500 ease-out animate-fade-up sm:rounded-[26px] sm:p-6 ${
                  isFeatured
                    ? "z-10 -translate-y-2 border-slate-950 bg-slate-950 text-white shadow-[0_26px_70px_rgba(15,23,42,0.16)]"
                    : isCustom
                    ? "border-white/70 bg-white/80 backdrop-blur-sm"
                    : "border-white/75 bg-white"
                } ${
                  isFocused
                    ? "z-20 -translate-y-3 scale-[1.03] shadow-[0_30px_80px_rgba(15,23,42,0.14)]"
                    : isDimmed
                    ? "scale-[0.97] opacity-80"
                    : "scale-100"
                }`}
                style={{ animationDelay: `${100 + (isFeatured ? 60 : isCustom ? 120 : 0)}ms` }}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.22)_20%,rgba(255,255,255,0)_36%)] bg-[length:220%_100%] animate-shine transition-opacity ${
                    isFeatured ? "opacity-25" : isFocused ? "opacity-55" : "opacity-18 group-hover:opacity-28"
                  }`}
                />
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent ${
                    isFeatured || isFocused || activePlan === index ? "animate-pulse-soft opacity-70" : "opacity-0"
                  }`}
                />
                {isFeatured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-white px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-[0_8px_20px_rgba(15,23,42,0.12)]">
                      Recommended
                    </span>
                  </div>
                )}

                <div className="relative">
                  <p
                    className={`text-[11px] font-medium uppercase tracking-[0.2em] ${
                      isFeatured ? "text-white/55" : "text-slate-400"
                    }`}
                  >
                    {plan.name}
                  </p>

                  {plan.custom ? (
                    <p className="mt-3 text-[2.4rem] font-black leading-none tracking-tight text-slate-950 sm:text-[2.8rem]">
                      Custom
                    </p>
                  ) : (
                    <div className="mt-3 flex items-end gap-1">
                      <span className={`text-[2.4rem] font-black leading-none tracking-tight sm:text-[2.8rem] ${isFeatured ? "text-white" : "text-slate-950"}`}>
                        {plan.price}
                      </span>
                      <span className={`mb-2 text-[11px] ${isFeatured ? "text-white/60" : "text-slate-400"}`}>
                        {plan.period}
                      </span>
                    </div>
                  )}

                  <p className={`mt-2 text-[11px] leading-6 sm:text-[12px] ${isFeatured ? "text-white/70" : "text-slate-500"}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="relative mt-5 flex flex-1 flex-col gap-2 sm:mt-6 sm:gap-2.5">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <span
                        className={`mt-1 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-[9px] font-bold transition-transform duration-300 ${
                          isFeatured
                            ? "bg-white text-slate-950"
                            : isFocused
                            ? "bg-emerald-200 text-emerald-700 scale-110"
                            : "bg-emerald-100 text-emerald-600"
                        }`}
                      >
                        +
                      </span>
                      <span className={`text-[10px] leading-6 sm:text-[11px] ${isFeatured ? "text-white/82" : "text-slate-600"}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className={`mt-5 rounded-full px-4 py-3 text-[12px] font-medium transition-transform hover:-translate-y-0.5 sm:mt-6 ${
                    isFeatured
                      ? "bg-white text-slate-950 shadow-[0_12px_24px_rgba(15,23,42,0.18)] hover:bg-slate-100"
                      : "border border-slate-200 bg-transparent text-slate-950 hover:bg-white"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
