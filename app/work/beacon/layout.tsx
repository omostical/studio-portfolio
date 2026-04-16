import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Beacon — The OS for Early-Stage Startups",
  description:
    "Runway tracking, cap table management, hiring pipeline, and investor updates — finally in one place.",
  keywords: [
    "startup tools",
    "runway tracking",
    "cap table management",
    "investor updates",
    "startup operating system",
  ],
  openGraph: {
    title: "Beacon — The OS for Early-Stage Startups",
    description: "Stop duct-taping your startup together.",
    type: "website",
  },
};

export default function BeaconLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${sora.variable} ${jakarta.variable}`}>{children}</div>
  );
}
