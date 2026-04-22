import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "SEVRIN — Contemporary outerwear, cut in Florence",
  description:
    "Heritage tailoring for the modern wardrobe. Overcoats, knitwear, and leather goods, made in limited runs by a bench of three artisans in the Oltrarno.",
  keywords: [
    "luxury outerwear",
    "Italian tailoring",
    "Florence atelier",
    "quiet luxury",
    "bespoke overcoats",
    "Biellese wool",
  ],
  openGraph: {
    title: "SEVRIN — A quieter way to be dressed",
    description:
      "Overcoats, knitwear, and leather goods, cut in Florence in limited runs.",
    type: "website",
  },
};

export default function SevrinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={cormorant.variable}>{children}</div>;
}
