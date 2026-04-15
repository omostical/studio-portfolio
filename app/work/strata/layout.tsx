import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strata — Revenue Recognition for SaaS",
  description:
    "Automated ASC 606-compliant revenue schedules for SaaS companies with usage-based, tiered, and multi-year contracts. Close your books in hours, not weeks.",
  keywords: [
    "revenue recognition software",
    "ASC 606 automation",
    "SaaS revenue recognition",
    "deferred revenue tracking",
    "GAAP revenue recognition",
    "SaaS accounting automation",
  ],
  openGraph: {
    title: "Strata — Revenue Recognition for SaaS",
    description:
      "Finally, revenue recognition that keeps pace with how you actually sell.",
    type: "website",
  },
};

export default function StrataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
