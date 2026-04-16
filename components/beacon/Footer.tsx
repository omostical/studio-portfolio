"use client";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Runway Tracker", href: "#" },
      { label: "Cap Table", href: "#" },
      { label: "Hiring Pipeline", href: "#" },
      { label: "Investor Updates", href: "#" },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Startup Guides", href: "#" },
      { label: "Fundraising Calculator", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Security", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Twitter", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Discord", href: "#" },
      { label: "GitHub", href: "#" },
      { label: "Founder Network", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        paddingTop: 64,
        paddingBottom: 40,
        borderTop: "1px solid rgba(24,24,27,0.06)",
        background: "#FAFAF8",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "40px 24px",
            marginBottom: 56,
          }}
          className="md:!grid-cols-[1.5fr_1fr_1fr_1fr_1fr]"
        >
          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: "#FF6B35",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="5" r="3" fill="white" />
                  <path d="M8 8 L8 14" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M4 11 L8 8 L12 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-sora)",
                  fontWeight: 600,
                  fontSize: 18,
                  color: "#18181B",
                  letterSpacing: "-0.02em",
                }}
              >
                Beacon
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: 14,
                color: "#71717A",
                lineHeight: 1.6,
                maxWidth: 260,
                marginBottom: 20,
              }}
            >
              The operating system for early-stage startups. Built by founders, for founders.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  fontSize: 11,
                  color: "#A1A1AA",
                  background: "rgba(24,24,27,0.04)",
                  padding: "4px 10px",
                  borderRadius: 4,
                }}
              >
                SOC 2 Type II
              </span>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  fontSize: 11,
                  color: "#A1A1AA",
                  background: "rgba(24,24,27,0.04)",
                  padding: "4px 10px",
                  borderRadius: 4,
                }}
              >
                GDPR Ready
              </span>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <p
                style={{
                  fontFamily: "var(--font-sora)",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#18181B",
                  marginBottom: 16,
                  letterSpacing: "-0.01em",
                }}
              >
                {col.title}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontFamily: "var(--font-jakarta)",
                        fontSize: 13,
                        color: "#71717A",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#18181B")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#71717A")}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: 24,
            borderTop: "1px solid rgba(24,24,27,0.06)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: 13,
              color: "#A1A1AA",
            }}
          >
            &copy; 2024 Beacon Labs, Inc. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: 13,
              color: "#A1A1AA",
            }}
          >
            Made with conviction in San Francisco
          </p>
        </div>
      </div>
    </footer>
  );
}
