import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aura — AI-Powered Customer Experience",
  description:
    "Build AI agents that deliver better customer experiences. Conversational AI for enterprise support, sales, and onboarding.",
  keywords: [
    "AI customer experience",
    "conversational AI",
    "AI agents",
    "customer support AI",
    "enterprise AI",
  ],
  openGraph: {
    title: "Aura — Better Customer Experiences, Powered by AI",
    description:
      "Build, deploy, and optimize AI agents that understand your customers.",
    type: "website",
  },
};

export default function AuraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
