import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import InboxSection from "./InboxSection";
import PricingSection from "./PricingSection";
import Footer from "./Footer";
import Reveal from "./Reveal";

export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    description: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  features: {
    sectionHeadline: string;
    sectionSub: string;
    items: {
      icon: string;
      title: string;
      description: string;
      stats?: { label: string; value: string; trend?: string }[];
    }[];
  };
  inbox: {
    headline: string;
    highlightedWord: string;
    description: string;
    bullets: { title: string; description: string }[];
    threads: {
      initials: string;
      name: string;
      preview: string;
      status?: string;
      statusColor?: string;
    }[];
  };
  pricing: {
    headline: string;
    highlightedWord: string;
    subheadline: string;
    plans: {
      name: string;
      price?: string;
      period?: string;
      description: string;
      features: string[];
      cta: string;
      recommended?: boolean;
      custom?: boolean;
    }[];
  };
  stats: {
    messages: string;
    messagesTrend: string;
    pendingReplies: string;
    pendingTrend: string;
    avgResponse: string;
    responseTrend: string;
    revenue: string;
    revenueTrend: string;
  };
}

export const defaultConfig: SiteConfig = {
  brand: {
    name: "Cirrus",
    tagline: "Quiet automation for busy teams",
    description:
      "An unhurried operations platform for small teams. Secure every lead, draft every reply, and watch every move without the dashboard noise.",
  },
  hero: {
    headline: "Run your business on a quieter kind of automation.",
    subheadline:
      "Cirrus is an unhurried operations platform for small teams. Secure every lead, draft every reply, and watch every move without the dashboard noise.",
    ctaPrimary: "Start a 14-day trial",
    ctaSecondary: "Watch the 90-second tour",
  },
  features: {
    sectionHeadline: "Built for teams who would rather not live in the inbox.",
    sectionSub:
      "Three small surfaces, working together. None of them ask you to manage them. The platform is the absence of the dashboard.",
    items: [
      {
        icon: "U",
        title: "Unified replies",
        description:
          "One thread per customer across email, SMS, WhatsApp, and Instagram. The AI keeps tone consistent and never reintroduces itself.",
        stats: [
          { label: "Email", value: "live" },
          { label: "WhatsApp", value: "live" },
          { label: "Instagram", value: "syncing" },
        ],
      },
      {
        icon: "P",
        title: "Pipelines that move themselves",
        description:
          "Leads slide from new to qualified when the leads say so. Stage rules are plain English, version-controlled, and one-click reversible.",
        stats: [
          { label: "New", value: "412" },
          { label: "Qualified", value: "228" },
          { label: "Closed", value: "90" },
        ],
      },
      {
        icon: "A",
        title: "Honest analytics",
        description:
          "Six metrics, no vanity. Pick the one you report to your team on Monday and Cirrus quietly defends it the rest of the week.",
        stats: [
          { label: "First reply", value: "2m 09s" },
          { label: "Resolution", value: "94.2%" },
          { label: "Win rate", value: "31.4%" },
        ],
      },
    ],
  },
  inbox: {
    headline: "The inbox stops being the",
    highlightedWord: "place you live.",
    description:
      "Threads sort themselves by intent, not arrival. The AI drafts in the customer's voice. You read, you nudge a sentence, you send. No queue. No 8pm panic.",
    bullets: [
      {
        title: "Replies drafted in tone",
        description: "Cirrus learns from the last 90 days of your sent folder.",
      },
      {
        title: "Intent-sorted threads",
        description: "Buyers float to the top. Spam quietly drops to filed.",
      },
      {
        title: "One inbox, every channel",
        description: "Email, WhatsApp, SMS, Instagram, and your storefront chat.",
      },
    ],
    threads: [
      {
        initials: "MR",
        name: "Maya Roussel",
        preview: "Two questions about the lab slot before I order those for the team retreat...",
        status: "reply now",
        statusColor: "blue",
      },
      {
        initials: "JT",
        name: "Jonas T.",
        preview: "Confirmed the upgrade to annual. Send the invoice to billing@studio.co.",
        status: "Closed",
        statusColor: "gray",
      },
      {
        initials: "AO",
        name: "Aiko Ono",
        preview: "Following up after our call. Could you share the deck before Thursday?",
        status: "",
        statusColor: "",
      },
      {
        initials: "RC",
        name: "Refik & Co.",
        preview: "Hi, the shipping window slipped a day. Should we adjust the estimate on the page?",
        status: "Needs you",
        statusColor: "orange",
      },
      {
        initials: "EC",
        name: "Elena Chen",
        preview: "Great call earlier. Let's schedule the pilot for the second week of July.",
        status: "Drafting",
        statusColor: "yellow",
      },
    ],
  },
  pricing: {
    headline: "Pricing that",
    highlightedWord: "stays small.",
    subheadline:
      "One plan per team size. Yearly is 16% less than monthly and the trial really is fourteen days.",
    plans: [
      {
        name: "Solo",
        price: "$18",
        period: "/mo",
        description: "For the operator who is running it all themselves.",
        features: [
          "1 seat, 2 channels",
          "250 AI replies a month",
          "Unified inbox and threads",
          "Custom automations",
          "Pipelines and reporting",
        ],
        cta: "Start with Solo",
      },
      {
        name: "Studio",
        price: "$59",
        period: "/mo",
        description: "For a small team that ships every week.",
        features: [
          "Up to 8 seats, every channel",
          "Unlimited AI replies",
          "Pipelines, rules and webhooks",
          "Honest analytics dashboard",
          "Shared snippets and tones",
        ],
        cta: "Start a Studio trial",
        recommended: true,
      },
      {
        name: "Atelier",
        price: undefined,
        period: undefined,
        description: "For agencies and studios who manage multiple brands.",
        features: [
          "Unlimited seats and brands",
          "SSO and SCIM provisioning",
          "Private model fine-tuning",
          "Dedicated success lead",
          "On-site onboarding",
        ],
        cta: "Talk to founders",
        custom: true,
      },
    ],
  },
  stats: {
    messages: "382",
    messagesTrend: "+14% more than last month",
    pendingReplies: "4",
    pendingTrend: "-3 since 9am",
    avgResponse: "2m 09s",
    responseTrend: "+222% more",
    revenue: "$97,418",
    revenueTrend: "+181% more",
  },
};

export default function LandingPage({ config = defaultConfig }: { config?: SiteConfig }) {
  return (
    <div className="cirrus-root min-h-screen bg-transparent font-sans">
      <Navbar config={config} />
      <Reveal>
        <HeroSection config={config} />
      </Reveal>
      <Reveal delay={80}>
        <FeaturesSection config={config} />
      </Reveal>
      <Reveal delay={120}>
        <InboxSection config={config} />
      </Reveal>
      <Reveal delay={160}>
        <PricingSection config={config} />
      </Reveal>
      <Reveal delay={200}>
        <Footer config={config} />
      </Reveal>
    </div>
  );
}
