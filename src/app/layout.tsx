import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  // Reduce font weight variants to lower network cost while keeping visual fidelity
  weight: ["400", "500", "900"],
});

export const metadata: Metadata = {
  title: "Bluesky - Quiet automation for small teams",
  description:
    "An unhurried operations platform for small teams. Secure every lead, draft every reply, and watch every move without the dashboard noise.",
  keywords: ["automation", "inbox", "CRM", "AI replies", "small business"],
  openGraph: {
    title: "Bluesky - Quiet automation for small teams",
    description: "Run your business on a quieter kind of automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} bg-[#edf4fa] text-slate-950 antialiased`}>{children}</body>
    </html>
  );
}
