import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";

const libre = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-libre",
  display: "swap",
  weight: ["400", "700"],
});

const source = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Medly — Patient Engagement That Actually Works",
  description:
    "Reduce no-shows by 40% with smart scheduling, automated reminders, and real-time patient communication. Trusted by 200+ healthcare providers.",
  keywords: [
    "patient engagement platform",
    "reduce no-shows healthcare",
    "healthcare scheduling software",
    "automated patient reminders",
    "patient communication platform",
    "clinic management software",
    "HIPAA compliant patient engagement",
    "healthcare provider tools",
  ],
  openGraph: {
    title: "Medly — Patient Engagement That Actually Works",
    description:
      "Your patients want to show up. Make it easy. Reduce no-shows by 40% with smart scheduling and automated reminders for healthcare providers.",
    type: "website",
  },
};

export default function MedlyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${libre.variable} ${source.variable}`}>{children}</div>
  );
}
