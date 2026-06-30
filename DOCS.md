# Documentation — `SiteConfig` reference

Bluesky renders the entire landing page from a single typed object, `SiteConfig`,
exported alongside `defaultConfig` from
[`src/components/LandingPage.tsx`](./src/components/LandingPage.tsx).

Pass your own object to the root component:

```tsx
import LandingPage, { SiteConfig } from "@/components/LandingPage";

const config: SiteConfig = { /* … */ };

export default function Home() {
  return <LandingPage config={config} />;
}
```

If no `config` prop is passed, the component uses `defaultConfig`.

> **Notice / Disclaimer.** Bluesky is an independent, original project built from
> scratch in this repository, with a custom day/night dark mode. It is not
> affiliated with, sponsored by, or endorsed by any company, product, or commercial
> template. All trademarks belong to their respective owners. Any resemblance to
> existing commercial templates is coincidental — no third-party proprietary code or
> assets were copied here. See the
> [README](./README.md#%EF%B8%8F-disclaimer--notice) for the full notice.

---

## Top-level shape

```ts
interface SiteConfig {
  brand:    Brand;
  hero:     Hero;
  features: Features;
  inbox:    Inbox;
  pricing:  Pricing;
  stats:    Stats;
}
```

---

## `brand`

| Field | Type | Description |
|-------|------|-------------|
| `name` | `string` | Brand name shown in the navbar and footer. |
| `tagline` | `string` | Short one-line positioning statement. |
| `description` | `string` | Longer description (footer / metadata). |

## `hero`

| Field | Type | Description |
|-------|------|-------------|
| `headline` | `string` | Main hero title. |
| `subheadline` | `string` | Supporting paragraph under the title. |
| `ctaPrimary` | `string` | Primary button label. |
| `ctaSecondary` | `string` | Secondary button label. |

## `features`

| Field | Type | Description |
|-------|------|-------------|
| `sectionHeadline` | `string` | Section title. |
| `sectionSub` | `string` | Section subtitle. |
| `items` | `FeatureItem[]` | Feature cards (3 recommended). |

```ts
interface FeatureItem {
  icon: string;        // single letter / glyph rendered in the card badge
  title: string;
  description: string;
  stats?: { label: string; value: string; trend?: string }[];
}
```

## `inbox`

| Field | Type | Description |
|-------|------|-------------|
| `headline` | `string` | First part of the section title. |
| `highlightedWord` | `string` | Trailing words rendered with the accent style. |
| `description` | `string` | Section paragraph. |
| `bullets` | `{ title: string; description: string }[]` | Feature bullets next to the mockup. |
| `threads` | `Thread[]` | Conversation rows in the inbox mockup. |

```ts
interface Thread {
  initials: string;
  name: string;
  preview: string;
  status?: string;       // e.g. "reply now", "Closed", "Needs you"
  statusColor?: string;  // "blue" | "gray" | "orange" | "yellow" | ""
}
```

## `pricing`

| Field | Type | Description |
|-------|------|-------------|
| `headline` | `string` | First part of the section title. |
| `highlightedWord` | `string` | Accent-styled trailing words. |
| `subheadline` | `string` | Section paragraph. |
| `plans` | `Plan[]` | Pricing cards (3 recommended). |

```ts
interface Plan {
  name: string;
  price?: string;        // omit for custom/enterprise plans
  period?: string;       // e.g. "/mo"
  description: string;
  features: string[];
  cta: string;
  recommended?: boolean; // highlights the card
  custom?: boolean;      // renders as "contact us" style
}
```

## `stats`

Drives the animated dashboard mockup in the hero. All values are strings so you
can include currency symbols and units.

| Field | Type | Description |
|-------|------|-------------|
| `messages` | `string` | Total messages metric. |
| `messagesTrend` | `string` | Trend caption under messages. |
| `pendingReplies` | `string` | Pending replies metric. |
| `pendingTrend` | `string` | Trend caption. |
| `avgResponse` | `string` | Average response time. |
| `responseTrend` | `string` | Trend caption. |
| `revenue` | `string` | Revenue metric. |
| `revenueTrend` | `string` | Trend caption. |

---

## Theming (light / dark)

Bluesky ships with a day/night dark mode:

- The toggle is implemented in
  [`src/components/NavbarControls.tsx`](./src/components/NavbarControls.tsx).
- It adds/removes a `night` class on the root `<html>` element.
- Dark styles are defined under `html.night …` selectors in
  [`src/styles/globals.css`](./src/styles/globals.css).
- The active theme persists in `localStorage` under the `bluesky-theme` key and
  falls back to the OS `prefers-color-scheme` on first visit.

## Styling

Design tokens live in [`src/styles/globals.css`](./src/styles/globals.css) and
[`tailwind.config.ts`](./tailwind.config.ts). See the **Design tokens** table in
the [README](./README.md) for the palette. Charts and gauges are pure SVG with no
external dependency, so restyling them only touches markup and Tailwind classes.

## Caching

[`next.config.ts`](./next.config.ts) sets long-lived, immutable cache headers for
`/_next/static/*` assets and a one-week `stale-while-revalidate` policy for
images and fonts.
