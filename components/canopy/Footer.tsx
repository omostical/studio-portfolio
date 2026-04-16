"use client";

const footerColumns = [
  {
    title: "Platform",
    links: [
      { label: "AI Triage", href: "#" },
      { label: "Fraud Detection", href: "#" },
      { label: "Smart Routing", href: "#" },
      { label: "Analytics", href: "#" },
      { label: "Integrations", href: "#" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "P&C Carriers", href: "#" },
      { label: "Health Insurance", href: "#" },
      { label: "Auto Insurance", href: "#" },
      { label: "Workers' Comp", href: "#" },
      { label: "Reinsurance", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Whitepapers", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Security", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Legal", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(59,130,246,0.06)",
        padding: "60px 0 40px",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <div
                style={{
                  width: 28,
                  height: 28,
                  background: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
                  borderRadius: 7,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M9 1L16 5.5V12.5L9 17L2 12.5V5.5L9 1Z"
                    stroke="#E4E8F0"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <path
                    d="M9 5L13 7.5V12.5L9 15L5 12.5V7.5L9 5Z"
                    fill="#E4E8F0"
                    fillOpacity="0.3"
                  />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-space)",
                  fontWeight: 600,
                  fontSize: 16,
                  color: "#E4E8F0",
                  letterSpacing: "-0.02em",
                }}
              >
                Canopy
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: 13,
                lineHeight: 1.6,
                color: "#6B7FA0",
                maxWidth: 220,
              }}
            >
              Claims intelligence that protects what matters.
            </p>
          </div>

          {/* Columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  fontFamily: "var(--font-space)",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#E4E8F0",
                  marginBottom: 16,
                  letterSpacing: "-0.01em",
                }}
              >
                {col.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {col.links.map((link) => (
                  <li key={link.label} style={{ marginBottom: 10 }}>
                    <a
                      href={link.href}
                      style={{
                        fontFamily: "var(--font-outfit)",
                        fontSize: 13,
                        color: "#6B7FA0",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#E4E8F0")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#6B7FA0")
                      }
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
            borderTop: "1px solid rgba(59,130,246,0.06)",
            paddingTop: 24,
          }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div
            style={{
              fontFamily: "var(--font-outfit)",
              fontSize: 12,
              color: "#6B7FA0",
            }}
          >
            2024 Canopy Technologies, Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: 12,
                    color: "#6B7FA0",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#E4E8F0")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#6B7FA0")
                  }
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
