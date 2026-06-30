# Cirrus — Landing Page Template

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61dafb)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)](https://tailwindcss.com/)

A production-ready landing page template with a calm **"sky"** aesthetic — blue
gradients, SVG clouds, ultra-black Inter typography, and floating UI cards.
The **entire page is driven by a single typed configuration object** (`SiteConfig`),
so you can ship a new brand's landing page without touching a single component.

> Le template est piloté par un seul objet TypeScript : changez le contenu, pas le code.

---

## ✨ Features

- **One-object configuration** — edit `SiteConfig`, never the components.
- **Zero chart dependencies** — bars, gauges, and pipelines are pure SVG.
- **Fully responsive** — mobile-first, standard Tailwind breakpoints.
- **Scroll reveal animations** — built-in `Reveal` wrapper, no extra libraries.
- **Sections included** — Navbar, Hero + dashboard mockup, Features, Inbox split,
  Pricing, Footer.
- **Type-safe** — strict TypeScript, App Router, React 18.

## 🧱 Stack

| Tool | Version |
|------|---------|
| Next.js (App Router) | 16 |
| React | 18 |
| TypeScript | 5 |
| Tailwind CSS | 3 |
| Node.js | ≥ 18 |

## 🚀 Quick start

```bash
git clone https://github.com/angekana49-ui/Bluesky.git
cd Bluesky
npm install
npm run dev
# → http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

## 🎨 Customization

Everything renders from **one object**: `SiteConfig`. Edit `src/app/page.tsx`:

```tsx
import LandingPage, { SiteConfig } from "@/components/LandingPage";

const config: SiteConfig = {
  brand: {
    name: "Bluestift",
    tagline: "The AI that teaches at your pace",
    description: "A pedagogical platform powered by AI tutoring…",
  },
  hero: {
    headline: "Learn. For real.",
    subheadline: "A personal AI tutor for every student…",
    ctaPrimary: "Try 14 days free",
    ctaSecondary: "Watch the demo",
  },
  // features, inbox, pricing, stats…
};

export default function Home() {
  return <LandingPage config={config} />;
}
```

Not passing a config? The template falls back to `defaultConfig` exported from
`LandingPage.tsx`. See [DOCS.md](./DOCS.md) for the full `SiteConfig` reference.

## 📁 Project structure

```
src/
├── app/
│   ├── layout.tsx          ← metadata, Inter font
│   └── page.tsx            ← entry point — pass your config here
├── components/
│   ├── LandingPage.tsx     ← root + SiteConfig type + defaultConfig
│   ├── Navbar.tsx          ← floating pill nav
│   ├── NavbarControls.tsx  ← nav interactions
│   ├── HeroSection.tsx     ← sky hero + SVG clouds
│   ├── DashboardMockup.tsx ← animated dashboard card in the hero
│   ├── FeaturesSection.tsx ← 3 feature cards
│   ├── InboxSection.tsx    ← split layout + inbox mockup
│   ├── PricingSection.tsx  ← 3 pricing plans
│   ├── Footer.tsx          ← 4-column footer
│   └── Reveal.tsx          ← scroll-reveal animation wrapper
└── styles/
    └── globals.css         ← CSS tokens, utility components
```

## 🎯 Design tokens

| Token | Value |
|-------|-------|
| Hero background | `#b8d4e8 → #dce8f0` (gradient) |
| Section background | `#ffffff → #dce8f0` |
| Pricing background | `#dce8f0 → #c8dde9` |
| Accent indigo | `#6366f1` |
| Accent orange | `#f97316` |
| Accent green | `#22c55e` |
| Text primary | `#111111` |
| Text secondary | `#6b7280` |
| Text muted | `#9ca3af` |
| Display font | Inter 900 |
| Italic display | Georgia italic |

## ⚖️ Disclaimer / Notice

This project is an **independent, original reinterpretation** built around a calm
"sky"-inspired visual aesthetic that it refers to internally as *Cirrus*. It is a
**reworked and improved** take on that style — written from scratch in this
repository.

- This project is **not affiliated with, sponsored by, or endorsed by** any
  commercial template, vendor, company, or product that may share a similar name
  or look.
- *"Cirrus"*, *"Bluesky"*, and any other names referenced here are used purely as
  descriptive/aesthetic labels. All trademarks, service marks, and brand names are
  the property of their respective owners.
- The word "Cirrus" (a common cloud type) is used in its **generic, descriptive
  sense** and implies no association with any branded product.
- **Any resemblance to existing commercial templates or products is coincidental.**
  No proprietary code, assets, or content from any third-party template has been
  copied into this repository.
- The software is provided "as is", without warranty of any kind, as stated in the
  [MIT License](./LICENSE).

> 🇫🇷 Ce projet est une réinterprétation indépendante et originale d'une esthétique
> visuelle « ciel » dite *Cirrus*, retravaillée et améliorée. Il n'est **affilié à
> aucun** fournisseur de templates, marque ou produit commercial. Tous les noms et
> marques cités appartiennent à leurs détenteurs respectifs. **Toute ressemblance
> avec un template ou produit commercial existant serait fortuite** — aucun code ni
> asset propriétaire tiers n'a été copié dans ce dépôt.

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md)
before opening an issue or a pull request.

## 📄 License

Released under the [MIT License](./LICENSE). Use it freely in personal and
commercial projects.
