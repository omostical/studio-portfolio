import type { Metadata } from "next";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Lumen — Analytics for Operators",
  description:
    "Turn messy operational data into decisions, without a data team. Natural-language queries, pre-built ops metrics, alerts that flag problems before your standup.",
  keywords: [
    "ops analytics",
    "operational intelligence",
    "business operations",
    "RevOps analytics",
    "SaaS analytics",
  ],
  openGraph: {
    title: "Lumen — See what's breaking before your team does",
    description: "Analytics for operators, not data teams.",
    type: "website",
  },
};

export default function LumenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={manrope.variable}>{children}</div>;
}
