'use client';

import type { SiteConfig } from "./LandingPage";
import dynamic from "next/dynamic";

const DashboardMockup = dynamic(() => import("./DashboardMockup"), {
  ssr: false,
  loading: () => <div className="h-40 sm:h-56" aria-hidden="true" />,
});

export default function HeroSection({ config }: { config: SiteConfig }) {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-[8.5rem] sm:pb-28">
      {/* Day sky */}
      <div
        className="cirrus-sky-day absolute inset-0 transition-opacity duration-700"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.18) 22%, rgba(255,255,255,0) 44%), linear-gradient(180deg, #3A93BF 0%, #4DA6CC 13%, #63B7D6 26%, #7DC4DF 40%, #98D1E8 53%, #B3DEF0 66%, #CAEAF6 78%, #DAEFF8 88%, #EAF5FB 100%)",
        }}
      />
      {/* Night sky */}
      <div
        className="cirrus-sky-night absolute inset-0 opacity-0 transition-opacity duration-700"
        style={{
          background:
            "linear-gradient(180deg, #020c18 0%, #061422 18%, #0b1c30 40%, #0e1f30 65%, #101e2a 100%)",
        }}
      />

      {/* Shimmer overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.28)_18%,rgba(255,255,255,0)_36%)] bg-[length:220%_100%] animate-shine opacity-50" />

      {/* Top fade */}
      <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,255,255,0))]" />

      <CloudBackground />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6">
        <div className="nt-pill mb-5 inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/60 bg-white/55 px-4 py-1.5 text-[11px] font-medium text-slate-600 shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-md nt-secondary">
          <span className="h-2 w-2 rounded-full bg-slate-950" />
          Quiet operations for focused teams
        </div>

        <h1
          className="animate-fade-up max-w-5xl text-[clamp(2.45rem,11vw,6.25rem)] font-black leading-[0.95] tracking-tight text-slate-950 nt-primary sm:text-[clamp(3rem,7vw,6.25rem)]"
          style={{ letterSpacing: "-0.05em" }}
        >
          {config.hero.headline}
        </h1>

        <p
          className="mt-5 max-w-2xl animate-fade-up text-[14px] leading-6 text-slate-600 nt-secondary sm:mt-6 sm:text-base sm:leading-7"
          style={{ animationDelay: "90ms" }}
        >
          {config.hero.subheadline}
        </p>

        <div
          className="mt-7 flex w-full flex-col items-stretch justify-center gap-3 animate-fade-up sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
          style={{ animationDelay: "150ms" }}
        >
          <button className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white shadow-[0_18px_40px_rgba(15,23,42,0.18)] transition-transform hover:-translate-y-0.5 hover:bg-slate-800">
            <span className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.18)_20%,rgba(255,255,255,0)_42%)] bg-[length:220%_100%] animate-shine opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/15 text-[10px]">
              Play
            </span>
            <span className="relative">{config.hero.ctaPrimary}</span>
          </button>
          <button className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-white/70 bg-white/85 px-5 py-3 text-sm font-medium text-slate-700 shadow-[0_14px_30px_rgba(15,23,42,0.07)] backdrop-blur-md transition-transform hover:-translate-y-0.5 hover:bg-white">
            <span className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.22)_20%,rgba(255,255,255,0)_42%)] bg-[length:220%_100%] animate-shine opacity-0 transition-opacity group-hover:opacity-70" />
            <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 text-[9px] text-slate-500">
              i
            </span>
            <span className="relative">{config.hero.ctaSecondary}</span>
          </button>
        </div>

        <div
          className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[10px] text-slate-500 animate-fade-up sm:mt-8"
          style={{ animationDelay: "210ms" }}
        >
          <span className="nt-pill rounded-full border border-white/60 bg-white/45 px-3 py-1 backdrop-blur-md">14-day trial</span>
          <span className="nt-pill rounded-full border border-white/60 bg-white/45 px-3 py-1 backdrop-blur-md">No setup fees</span>
          <span className="nt-pill rounded-full border border-white/60 bg-white/45 px-3 py-1 backdrop-blur-md">Cancel anytime</span>
        </div>

        <div className="relative mt-10 w-full max-w-6xl animate-float-soft sm:mt-14">
          <div className="absolute inset-x-6 top-8 -z-10 h-[70%] rounded-[40px] bg-slate-950/10 blur-3xl sm:inset-x-8" />
          <DashboardMockup config={config} />
        </div>
      </div>
    </section>
  );
}

function CloudBackground() {
  return (
    <div className="cirrus-cloud-bg pointer-events-none absolute inset-0 select-none overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 820"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="cf-soft" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
          <radialGradient id="cg-highlight" cx="48%" cy="20%" r="68%">
            <stop offset="0%"   stopColor="#FFFFFF" />
            <stop offset="38%"  stopColor="#F9FDFF" />
            <stop offset="72%"  stopColor="#E4F0F7" />
            <stop offset="100%" stopColor="#C8DCEB" />
          </radialGradient>
          <radialGradient id="cg-mid" cx="50%" cy="30%" r="72%">
            <stop offset="0%"   stopColor="#FAFCFE" />
            <stop offset="45%"  stopColor="#EAF3F8" />
            <stop offset="80%"  stopColor="#D2E5EF" />
            <stop offset="100%" stopColor="#B8CDD8" />
          </radialGradient>
          <radialGradient id="cg-shadow" cx="50%" cy="42%" r="76%">
            <stop offset="0%"   stopColor="#EEF5FA" />
            <stop offset="52%"  stopColor="#D5E4ED" />
            <stop offset="84%"  stopColor="#BDD1DC" />
            <stop offset="100%" stopColor="#A5BFCC" />
          </radialGradient>
        </defs>

        <ellipse cx="720" cy="840" rx="950" ry="160" fill="rgba(220,238,248,0.55)" filter="url(#cf-soft)" />

        <g opacity="0.32" filter="url(#cf-soft)">
          <ellipse cx="210"  cy="670" rx="310" ry="210" fill="#CCE2EE" />
          <ellipse cx="1240" cy="650" rx="290" ry="200" fill="#CAE0EC" />
          <ellipse cx="720"  cy="710" rx="360" ry="185" fill="#CEE3EF" />
        </g>

        <g style={{ willChange: "transform" }}>
          <g className="animate-drift" style={{ animationDuration: "22s" }}>
            <ellipse cx="175" cy="820" rx="340" ry="62" fill="#9DBDCC" opacity="0.32" filter="url(#cf-soft)" />
            <ellipse cx="85"  cy="730" rx="235" ry="200" fill="url(#cg-shadow)" />
            <ellipse cx="305" cy="718" rx="255" ry="208" fill="url(#cg-shadow)" />
            <ellipse cx="185" cy="708" rx="272" ry="218" fill="url(#cg-mid)" />
            <ellipse cx="95"  cy="622" rx="210" ry="195" fill="url(#cg-mid)" />
            <ellipse cx="285" cy="610" rx="205" ry="190" fill="url(#cg-highlight)" />
            <ellipse cx="185" cy="600" rx="228" ry="208" fill="url(#cg-highlight)" />
            <ellipse cx="118" cy="512" rx="178" ry="168" fill="url(#cg-highlight)" />
            <ellipse cx="272" cy="505" rx="170" ry="162" fill="url(#cg-highlight)" />
            <ellipse cx="190" cy="492" rx="192" ry="180" fill="url(#cg-highlight)" />
            <ellipse cx="152" cy="420" rx="148" ry="140" fill="white" opacity="0.97" />
            <ellipse cx="238" cy="430" rx="132" ry="125" fill="white" opacity="0.98" />
            <ellipse cx="178" cy="406" rx="112" ry="106" fill="white" />
          </g>
        </g>

        <g style={{ willChange: "transform" }}>
          <g className="animate-drift" style={{ animationDuration: "19s", animationDelay: "2.5s" }}>
            <ellipse cx="1268" cy="820" rx="328" ry="60" fill="#9DBDCC" opacity="0.3" filter="url(#cf-soft)" />
            <ellipse cx="1178" cy="728" rx="248" ry="198" fill="url(#cg-shadow)" />
            <ellipse cx="1382" cy="712" rx="238" ry="194" fill="url(#cg-shadow)" />
            <ellipse cx="1268" cy="700" rx="265" ry="212" fill="url(#cg-mid)" />
            <ellipse cx="1098" cy="720" rx="205" ry="182" fill="url(#cg-shadow)" />
            <ellipse cx="1178" cy="612" rx="212" ry="198" fill="url(#cg-mid)" />
            <ellipse cx="1372" cy="604" rx="205" ry="190" fill="url(#cg-highlight)" />
            <ellipse cx="1268" cy="594" rx="232" ry="210" fill="url(#cg-highlight)" />
            <ellipse cx="1188" cy="505" rx="178" ry="168" fill="url(#cg-highlight)" />
            <ellipse cx="1362" cy="498" rx="168" ry="160" fill="url(#cg-highlight)" />
            <ellipse cx="1272" cy="486" rx="195" ry="182" fill="url(#cg-highlight)" />
            <ellipse cx="1238" cy="412" rx="150" ry="142" fill="white" opacity="0.97" />
            <ellipse cx="1322" cy="422" rx="134" ry="128" fill="white" opacity="0.98" />
            <ellipse cx="1270" cy="398" rx="114" ry="108" fill="white" />
          </g>
        </g>

        <g style={{ willChange: "transform" }}>
          <g className="animate-drift" style={{ animationDuration: "26s", animationDelay: "5.5s" }}>
            <ellipse cx="720" cy="820" rx="295" ry="56" fill="#A2BECC" opacity="0.28" filter="url(#cf-soft)" />
            <ellipse cx="648" cy="762" rx="225" ry="188" fill="url(#cg-shadow)" />
            <ellipse cx="802" cy="752" rx="218" ry="182" fill="url(#cg-shadow)" />
            <ellipse cx="720" cy="742" rx="245" ry="198" fill="url(#cg-mid)" />
            <ellipse cx="555" cy="762" rx="195" ry="172" fill="url(#cg-shadow)" />
            <ellipse cx="902" cy="762" rx="188" ry="168" fill="url(#cg-shadow)" />
            <ellipse cx="648" cy="658" rx="198" ry="185" fill="url(#cg-mid)" />
            <ellipse cx="802" cy="648" rx="192" ry="178" fill="url(#cg-highlight)" />
            <ellipse cx="720" cy="640" rx="215" ry="195" fill="url(#cg-highlight)" />
            <ellipse cx="658" cy="555" rx="162" ry="155" fill="url(#cg-highlight)" />
            <ellipse cx="792" cy="549" rx="158" ry="150" fill="url(#cg-highlight)" />
            <ellipse cx="720" cy="540" rx="178" ry="168" fill="url(#cg-highlight)" />
            <ellipse cx="720" cy="466" rx="142" ry="135" fill="white" opacity="0.96" />
            <ellipse cx="692" cy="476" rx="115" ry="110" fill="white" />
            <ellipse cx="750" cy="472" rx="110" ry="105" fill="white" />
          </g>
        </g>

        <g className="animate-drift" opacity="0.78" style={{ animationDuration: "15s", animationDelay: "1s" }}>
          <ellipse cx="432" cy="212" rx="128" ry="82" fill="white" opacity="0.86" />
          <ellipse cx="522" cy="196" rx="102" ry="70" fill="white" />
          <ellipse cx="352" cy="220" rx="108" ry="74" fill="#EEF5FA" />
          <ellipse cx="444" cy="178" rx="90"  ry="78" fill="white" />
        </g>
        <g className="animate-drift" opacity="0.70" style={{ animationDuration: "18s", animationDelay: "4s" }}>
          <ellipse cx="1032" cy="190" rx="132" ry="84" fill="white" opacity="0.84" />
          <ellipse cx="958"  cy="204" rx="108" ry="72" fill="white" />
          <ellipse cx="1112" cy="206" rx="102" ry="70" fill="#EBF4F9" />
          <ellipse cx="1038" cy="172" rx="90"  ry="78" fill="white" />
        </g>
      </svg>
    </div>
  );
}
