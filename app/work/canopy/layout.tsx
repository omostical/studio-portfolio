import type { Metadata } from "next";
import { Space_Grotesk, Outfit, Fira_Code } from "next/font/google";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const fira = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Canopy — Claims Intelligence Platform",
  description:
    "AI-driven claims triage, fraud detection, and automated payouts. Process claims 5× faster with 94% first-touch accuracy.",
  keywords: [
    "claims processing automation",
    "insurance AI",
    "fraud detection",
    "claims intelligence",
    "insurtech",
  ],
  openGraph: {
    title: "Canopy — Claims Intelligence Platform",
    description: "Process claims in minutes, not months.",
    type: "website",
  },
};

export default function CanopyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${space.variable} ${outfit.variable} ${fira.variable}`}>
      {children}
    </div>
  );
}
