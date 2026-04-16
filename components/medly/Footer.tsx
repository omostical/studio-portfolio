"use client";

const columns = [
  {
    heading: "Product",
    links: [
      "Smart Scheduling",
      "Automated Reminders",
      "Patient Portal",
      "Analytics",
      "Integrations",
      "API Docs",
    ],
  },
  {
    heading: "Company",
    links: ["About", "Blog", "Careers", "Press", "Contact"],
  },
  {
    heading: "Resources",
    links: [
      "Case Studies",
      "ROI Calculator",
      "Implementation Guide",
      "Help Center",
    ],
  },
  {
    heading: "Legal",
    links: [
      "Privacy Policy",
      "Terms of Service",
      "HIPAA Compliance",
      "BAA Request",
      "Security",
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        paddingTop: "64px",
        paddingBottom: "40px",
        borderTop: "1px solid rgba(78,203,160,0.08)",
        background: "#0F1A14",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Top row */}
        <div className="grid md:grid-cols-[220px_1fr] gap-12" style={{ marginBottom: "48px" }}>
          {/* Brand */}
          <div>
            <a
              href="/work/medly"
              className="flex items-center gap-2 select-none"
              style={{
                textDecoration: "none",
                marginBottom: "12px",
                display: "inline-flex",
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 26 26"
                fill="none"
                aria-hidden="true"
              >
                <rect
                  width="26"
                  height="26"
                  rx="6"
                  fill="#4ECBA0"
                  fillOpacity="0.12"
                />
                <path
                  d="M8 16V12.5C8 11.12 9.12 10 10.5 10C11.88 10 13 11.12 13 12.5V16M13 16V12.5C13 11.12 14.12 10 15.5 10C16.88 10 18 11.12 18 12.5V16"
                  stroke="#4ECBA0"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span
                style={{
                  fontFamily: "var(--font-libre), Georgia, serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#F0EDE5",
                  letterSpacing: "-0.02em",
                }}
              >
                Medly
              </span>
            </a>
            <p
              style={{
                fontFamily: "var(--font-source), system-ui, sans-serif",
                fontSize: "0.8rem",
                color: "#7A8F85",
                lineHeight: 1.6,
                marginBottom: "20px",
              }}
            >
              Patient engagement that actually works. Helping 200+ healthcare
              providers reduce no-shows and improve outcomes.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                {
                  label: "Twitter",
                  path: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
                },
                {
                  label: "LinkedIn",
                  path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  style={{
                    color: "#7A8F85",
                    transition: "color 0.15s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#F0EDE5")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#7A8F85")
                  }
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.heading}>
                <div
                  style={{
                    fontFamily:
                      "var(--font-source), system-ui, sans-serif",
                    fontSize: "0.625rem",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#7A8F85",
                    marginBottom: "16px",
                  }}
                >
                  {col.heading}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        style={{
                          fontFamily:
                            "var(--font-source), system-ui, sans-serif",
                          fontSize: "0.8rem",
                          color: "#7A8F85",
                          textDecoration: "none",
                          transition: "color 0.15s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#F0EDE5")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#7A8F85")
                        }
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          style={{
            paddingTop: "32px",
            borderTop: "1px solid rgba(78,203,160,0.06)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-source), system-ui, sans-serif",
              fontSize: "0.75rem",
              color: "#7A8F85",
            }}
          >
            &copy; 2026 Medly Health, Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#4ECBA0",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontFamily:
                    "var(--font-source), system-ui, sans-serif",
                  fontSize: "0.75rem",
                  color: "#7A8F85",
                }}
              >
                HIPAA Compliant
              </span>
            </div>
            <span style={{ color: "#7A8F85", opacity: 0.3 }}>&middot;</span>
            <div className="flex items-center gap-1.5">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 1L2 3v3c0 2.8 1.7 5.4 4 6 2.3-.6 4-3.2 4-6V3L6 1z"
                  stroke="#4ECBA0"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeOpacity="0.5"
                />
              </svg>
              <span
                style={{
                  fontFamily:
                    "var(--font-source), system-ui, sans-serif",
                  fontSize: "0.75rem",
                  color: "#7A8F85",
                }}
              >
                SOC 2 Type II
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
