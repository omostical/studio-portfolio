import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
  weight: "400",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Haven — Property Intelligence Platform",
  description:
    "Real-time visibility into occupancy, maintenance, and NOI across your entire property portfolio.",
  keywords: [
    "property management software",
    "real estate analytics",
    "NOI optimization",
    "occupancy tracking",
  ],
  openGraph: {
    title: "Haven — Property Intelligence Platform",
    description:
      "See your entire portfolio. Know exactly where the money goes.",
    type: "website",
  },
};

export default function HavenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${dmSerif.variable} ${jakarta.variable} ${ibmMono.variable}`}
    >
      {children}
    </div>
  );
}
