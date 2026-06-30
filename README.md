# Bluesky — Landing Page Template

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61dafb)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)](https://tailwindcss.com/)

A production-ready landing page template with a calm **"sky"** aesthetic — blue
gradients, SVG clouds, ultra-black Inter typography, floating UI cards, and a
built-in **day / night dark mode**. The **entire page is driven by a single typed
configuration object** (`SiteConfig`), so you can ship a new brand's landing page
without touching a single component.

> Le template est piloté par un seul objet TypeScript : changez le contenu, pas le code.

---

## ✨ Features

- **One-object configuration** — edit `SiteConfig`, never the components.
- **🌙 Light & dark mode** — animated day/night toggle, respects the OS preference
  and remembers your choice in `localStorage`.
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
    name: "Bluesky",
    tagline: "Calm software for small teams",
    description: "One clear sky for your messages, leads, and numbers…",
  },
  hero: {
    headline: "Clear skies for the way your team works.",
    subheadline: "Bluesky keeps every conversation in one calm place…",
    ctaPrimary: "Start a 14-day trial",
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

### Dark mode

The day/night toggle lives in `src/components/NavbarControls.tsx`. It toggles a
`night` class on `<html>`, and the dark styles are defined under `html.night …`
in `src/styles/globals.css`. The choice persists in `localStorage` under the
`bluesky-theme` key and falls back to the OS `prefers-color-scheme`.

## 📁 Project structure

```
src/
├── app/
│   ├── layout.tsx          ← metadata, Inter font
│   └── page.tsx            ← entry point — pass your config here
├── components/
│   ├── LandingPage.tsx     ← root + SiteConfig type + defaultConfig
│   ├── Navbar.tsx          ← floating pill nav + "B" logo
│   ├── NavbarControls.tsx  ← nav interactions + day/night theme toggle
│   ├── HeroSection.tsx     ← sky hero + SVG clouds (day & night skies)
│   ├── DashboardMockup.tsx ← animated dashboard card in the hero
│   ├── FeaturesSection.tsx ← 3 feature cards
│   ├── InboxSection.tsx    ← split layout + inbox mockup
│   ├── PricingSection.tsx  ← 3 pricing plans
│   ├── Footer.tsx          ← 4-column footer
│   └── Reveal.tsx          ← scroll-reveal animation wrapper
└── styles/
    └── globals.css         ← CSS tokens, utility components, dark theme
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

Bluesky is an **independent, original project**. It was built from scratch in this
repository using freely available online imagery for inspiration, with a custom
day/night dark mode added on top.

- This project is **not affiliated with, sponsored by, or endorsed by** any
  company, product, or commercial template that may share a similar name or look —
  including the "Bluesky" social network or any "sky"-themed UI kit.
- All trademarks, service marks, and brand names referenced here are the property
  of their respective owners.
- **Any resemblance to existing commercial templates or products is coincidental.**
  No proprietary third-party code, assets, or content has been copied into this
  repository.
- The software is provided "as is", without warranty of any kind, as stated in the
  [MIT License](./LICENSE).

> 🇫🇷 Bluesky est un projet indépendant et original, écrit depuis zéro dans ce
> dépôt à partir d'images librement disponibles en ligne, avec un mode sombre
> jour/nuit ajouté en propre. Il n'est **affilié à aucune** entreprise, marque ou
> produit commercial. Tous les noms et marques cités appartiennent à leurs
> détenteurs respectifs. **Toute ressemblance avec un template ou produit
> commercial existant serait fortuite** — aucun code ni asset propriétaire tiers
> n'a été copié dans ce dépôt.

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md)
before opening an issue or a pull request.

## 📄 License

Released under the [MIT License](./LICENSE). Use it freely in personal and
commercial projects.
