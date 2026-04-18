import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beacon — The Operating System for Early-Stage Startups",
  description:
    "Runway tracking, cap table management, hiring pipeline, and investor updates in one place. Built for pre-seed to Series A founders.",
  keywords: [
    "startup tools",
    "runway tracking",
    "cap table management",
    "investor updates",
    "startup operating system",
    "founder tools",
    "startup dashboard",
    "hiring pipeline",
    "metrics dashboard",
  ],
  openGraph: {
    title: "Beacon — The Operating System for Early-Stage Startups",
    description:
      "Stop duct-taping your startup together. Runway, cap table, hiring, and investor updates — finally in one place.",
    type: "website",
  },
};

export default function BeaconLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
