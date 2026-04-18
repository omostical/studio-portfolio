"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* SVG Icons */
const ChartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="M7 16l4-8 4 4 5-9" />
  </svg>
);

const PieIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 1 0 10 10h-10V2z" />
    <path d="M12 2a10 10 0 0 1 10 10h-10V2z" opacity="0.5" />
  </svg>
);

const PeopleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="3" />
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    <circle cx="18" cy="9" r="2" />
    <path d="M22 21v-1.5a3 3 0 0 0-3-3h-.5" />
  </svg>
);

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 4L12 13 2 4" />
  </svg>
);

const BarChartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="12" width="4" height="9" rx="1" />
    <rect x="10" y="7" width="4" height="14" rx="1" />
    <rect x="17" y="3" width="4" height="18" rx="1" />
  </svg>
);

const FolderIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4l2 3h10a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2z" />
  </svg>
);

const features = [
  {
    name: "Runway Tracker",
    description:
      "See exactly how long your money lasts. Model scenarios, set alerts, and never be surprised by a cash crunch.",
    icon: ChartIcon,
  },
  {
    name: "Cap Table",
    description:
      "Track ownership, model dilution from your next round, and keep SAFEs and convertible notes organized in one view.",
    icon: PieIcon,
  },
  {
    name: "Hiring Pipeline",
    description:
      "Kanban-style pipeline for every open role. Track candidates from sourced to signed without switching tools.",
    icon: PeopleIcon,
  },
  {
    name: "Investor Updates",
    description:
      "Compose monthly updates in minutes. Metrics auto-populate, so you spend time writing context — not copying numbers.",
    icon: MailIcon,
  },
  {
    name: "Metrics Dashboard",
    description:
      "MRR, burn rate, headcount, NPS — all in one dashboard. Connect Stripe, your bank, and HR tools for live data.",
    icon: BarChartIcon,
  },
  {
    name: "Team Directory",
    description:
      "Who does what, when they started, their equity grant — everything your small team needs without an HRIS.",
    icon: FolderIcon,
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section ref={ref} id="features" style={{ paddingTop: 96, paddingBottom: 96 }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: 56 }}
        >
          <p
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 12,
              color: "#71717A",
              letterSpacing: "0.04em",
              marginBottom: 16,
            }}
          >
            // features
          </p>
          <h2
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: "clamp(24px, 3.5vw, 36px)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#FAFAFA",
              marginBottom: 16,
              lineHeight: 1.2,
            }}
          >
            Everything you need.
            <br />
            Nothing you don&apos;t.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 16,
              color: "#A1A1AA",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Most startups duct-tape Notion, Sheets, Carta, Lever, and email
            together. Beacon is the single source of truth your team actually uses.
          </p>
        </motion.div>

        {/* Card grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: 16,
          }}
          className="md:!grid-cols-2 lg:!grid-cols-3"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                style={{
                  background: "#18181B",
                  borderRadius: 2,
                  border: "1px solid #27272A",
                  padding: 24,
                  cursor: "default",
                  transition: "border-color 0.2s, transform 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#3F3F46";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#27272A";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ marginBottom: 16 }}>
                  <Icon />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: 15,
                    fontWeight: 500,
                    color: "#FAFAFA",
                    marginBottom: 8,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {feature.name}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: "#A1A1AA",
                  }}
                >
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
