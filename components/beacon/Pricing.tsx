"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* SVG check icon */
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3.5 8.5L6.5 11.5L12.5 4.5" stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For solo founders getting started",
    cta: "Start free",
    featured: false,
    features: [
      "Up to 3 team members",
      "Runway tracker (basic)",
      "Cap table (view only)",
      "1 investor update / month",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "$29",
    period: "per user / month",
    description: "For founding teams raising or scaling",
    cta: "Start 14-day trial",
    featured: true,
    badge: "Popular",
    features: [
      "Unlimited team members",
      "Runway tracker + scenarios",
      "Full cap table + dilution modeling",
      "Unlimited investor updates",
      "Hiring pipeline",
      "Metrics dashboard + integrations",
      "Priority support",
    ],
  },
  {
    name: "Team",
    price: "$49",
    period: "per user / month",
    description: "For post-seed teams with complex needs",
    cta: "Contact us",
    featured: false,
    features: [
      "Everything in Pro",
      "Advanced permissions & roles",
      "Custom integrations (API)",
      "Board deck export",
      "SOC 2 compliance tools",
      "Dedicated account manager",
      "SSO & SAML",
    ],
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <section ref={ref} id="pricing" style={{ paddingTop: 96, paddingBottom: 96 }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Header */}
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
            // pricing
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
            Start free. Scale when ready.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), sans-serif",
              fontSize: 16,
              color: "#A1A1AA",
              maxWidth: 480,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            No long-term contracts. No per-feature pricing.
            Cancel anytime — we&apos;re founders too.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: 16,
            alignItems: "start",
          }}
          className="md:!grid-cols-3"
        >
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                background: "#18181B",
                borderRadius: 2,
                padding: 0,
                border: tier.featured
                  ? "1px solid #FBBF24"
                  : "1px solid #27272A",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Badge */}
              {tier.badge && (
                <div
                  style={{
                    background: "#FBBF24",
                    color: "#09090B",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    textAlign: "center",
                    padding: "6px 0",
                    letterSpacing: "0.02em",
                  }}
                >
                  {tier.badge}
                </div>
              )}

              <div style={{ padding: "24px 24px 28px" }}>
                {/* Tier name */}
                <h3
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: 16,
                    fontWeight: 500,
                    color: "#FAFAFA",
                    marginBottom: 4,
                  }}
                >
                  {tier.name}
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 13,
                    color: "#71717A",
                    marginBottom: 20,
                  }}
                >
                  {tier.description}
                </p>

                {/* Price */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 6,
                    marginBottom: 24,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontSize: 40,
                      fontWeight: 700,
                      letterSpacing: "-0.03em",
                      color: tier.featured ? "#FBBF24" : "#FAFAFA",
                    }}
                  >
                    {tier.price}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-dm-sans), sans-serif",
                      fontSize: 13,
                      color: "#71717A",
                    }}
                  >
                    {tier.period}
                  </span>
                </div>

                {/* CTA button */}
                <a
                  href="#cta"
                  style={{
                    display: "block",
                    textAlign: "center",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontSize: 14,
                    fontWeight: 500,
                    padding: "12px 20px",
                    borderRadius: 2,
                    textDecoration: "none",
                    transition: "background 0.2s, color 0.2s, border-color 0.2s",
                    marginBottom: 24,
                    ...(tier.featured
                      ? {
                          background: "#FBBF24",
                          color: "#09090B",
                          border: "1px solid #FBBF24",
                        }
                      : {
                          background: "transparent",
                          color: "#FAFAFA",
                          border: "1px solid #27272A",
                        }),
                  }}
                  onMouseEnter={(e) => {
                    if (tier.featured) {
                      e.currentTarget.style.background = "#F59E0B";
                    } else {
                      e.currentTarget.style.borderColor = "#3F3F46";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (tier.featured) {
                      e.currentTarget.style.background = "#FBBF24";
                    } else {
                      e.currentTarget.style.borderColor = "#27272A";
                    }
                  }}
                >
                  {tier.cta}
                </a>

                {/* Features list */}
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: 13,
                        color: "#A1A1AA",
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ flexShrink: 0, marginTop: 1 }}>
                        <CheckIcon />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
