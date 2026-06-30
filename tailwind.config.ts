import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bluesky sky palette
        sky: {
          50:  "#f0f8ff",
          100: "#dce8f0",
          200: "#c8dfe9",
          300: "#b0cfdf",
          400: "#8eb9d0",
        },
        // Custom neutrals
        "gray-25":  "#fafafa",
        "gray-50":  "#f8f8f7",
        "gray-100": "#f3f3f2",
        // Accents
        "bluesky-indigo":  "#6366f1",
        "bluesky-orange":  "#f97316",
        "bluesky-green":   "#22c55e",
      },
      fontFamily: {
        sans:    ["Inter", "Helvetica Neue", "-apple-system", "sans-serif"],
        display: ["Inter", "Helvetica Neue", "-apple-system", "sans-serif"],
        serif:   ["Georgia", "Times New Roman", "serif"],
      },
      fontSize: {
        "2xs": ["10px", { lineHeight: "14px" }],
      },
      borderRadius: {
        "xl":  "16px",
        "2xl": "20px",
        "3xl": "24px",
      },
      boxShadow: {
        "card":   "0 1px 8px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.05)",
        "card-lg":"0 4px 32px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.06)",
        "float":  "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)",
      },
      backdropBlur: {
        xs: "4px",
      },
      backgroundImage: {
        "sky-hero": "linear-gradient(180deg, #b8d4e8 0%, #c8dff0 20%, #d8eaf5 45%, #e2eff8 60%, #dce8f0 100%)",
        "sky-mid":  "linear-gradient(180deg, #ffffff 0%, #eef5fa 40%, #dce8f0 100%)",
        "sky-pricing": "linear-gradient(180deg, #dce8f0 0%, #cfe3ef 50%, #c8dde9 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-6px)" },
        },
        "float-soft": {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%":      { transform: "translateY(-10px) scale(1.01)" },
        },
        "drift": {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%":      { transform: "translate3d(12px,-10px,0)" },
        },
        "shine": {
          "0%":   { backgroundPosition: "-120% 0" },
          "100%": { backgroundPosition: "120% 0" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.55" },
          "50%":      { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease forwards",
        "float":   "float 4s ease-in-out infinite",
        "float-soft": "float-soft 7s ease-in-out infinite",
        "drift": "drift 16s ease-in-out infinite",
        "shine": "shine 10s linear infinite",
        "pulse-soft": "pulse-soft 3.5s ease-in-out infinite",
      },
    },
  },
  darkMode: ["selector", '[data-theme="night"]'],
  plugins: [],
};

export default config;
