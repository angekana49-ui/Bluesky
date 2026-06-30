"use client";

import React from "react";
import { SiteConfig } from "./LandingPage";

export default function Footer({ config }: { config: SiteConfig }) {
  const columns = [
    {
      label: "Product",
      links: ["Inbox", "Partners", "Automations", "Analytics", "Changelog"],
    },
    {
      label: "Company",
      links: ["About", "Customers", "Press kit", "Careers"],
    },
    {
      label: "Resources",
      links: ["Docs", "API reference", "Support", "Security"],
    },
  ];

  return (
    <footer className="bluesky-footer border-t border-white/70 bg-white/70 pt-12 pb-8 backdrop-blur-sm sm:pt-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 grid gap-8 md:grid-cols-5 sm:mb-12">
          <div className="col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-950">
                <span className="text-sm font-black leading-none text-white" aria-hidden="true">B</span>
              </div>
              <span className="text-sm font-semibold text-slate-950 nt-primary">{config.brand.name}</span>
            </div>
            <p className="max-w-[240px] text-[11px] leading-relaxed text-slate-500 nt-secondary">
              {config.brand.description}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.label}>
              <p className="mb-3 text-[11px] font-semibold text-slate-950 nt-primary">{col.label}</p>
              <div className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[11px] text-slate-500 nt-secondary transition-colors hover:text-slate-950"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-200/80 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] text-slate-400 nt-muted">
            (c) 2026 {config.brand.name} Operations Co. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Privacy", "Terms", "Status"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[10px] text-slate-400 nt-muted transition-colors hover:text-slate-950"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
