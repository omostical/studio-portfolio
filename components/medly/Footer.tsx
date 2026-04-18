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
        paddingTop: "80px",
        paddingBottom: "48px",
        background: "#FAFAF5",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Top row */}
        <div
          className="grid md:grid-cols-[240px_1fr] gap-16"
          style={{ marginBottom: "64px" }}
        >
          {/* Brand */}
          <div>
            <a
              href="/work/medly"
              className="flex items-center gap-2.5 select-none"
              style={{
                textDecoration: "none",
                marginBottom: "16px",
                display: "inline-flex",
              }}
            >
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: "#EFF8F4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 26 26"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8 16V12.5C8 11.12 9.12 10 10.5 10C11.88 10 13 11.12 13 12.5V16M13 16V12.5C13 11.12 14.12 10 15.5 10C16.88 10 18 11.12 18 12.5V16"
                    stroke="#3D9B7F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-libre), Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#2D3436",
                  letterSpacing: "-0.02em",
                }}
              >
                Medly
              </span>
            </a>
            <p
              style={{
                fontFamily: "var(--font-source), system-ui, sans-serif",
                fontSize: "0.85rem",
                color: "#7F8C8D",
                lineHeight: 1.7,
                marginBottom: "24px",
              }}
            >
              Patient engagement that actually works. Helping 200+ healthcare
              providers reduce no-shows and improve outcomes.
            </p>
            {/* Social */}
            <div className="flex items-center gap-4">
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
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "#EFF8F4",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#7F8C8D",
                    transition: "color 0.3s ease, background 0.3s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#3D9B7F";
                    e.currentTarget.style.background = "#E0F2EC";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#7F8C8D";
                    e.currentTarget.style.background = "#EFF8F4";
                  }}
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {columns.map((col) => (
              <div key={col.heading}>
                <div
                  style={{
                    fontFamily: "var(--font-source), system-ui, sans-serif",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#2D3436",
                    marginBottom: "20px",
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
                    gap: "12px",
                  }}
                >
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        style={{
                          fontFamily:
                            "var(--font-source), system-ui, sans-serif",
                          fontSize: "0.85rem",
                          color: "#7F8C8D",
                          textDecoration: "none",
                          transition: "color 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#2D3436")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#7F8C8D")
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
            borderTop: "1px solid rgba(45,52,54,0.06)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-source), system-ui, sans-serif",
              fontSize: "0.8rem",
              color: "#7F8C8D",
            }}
          >
            &copy; 2026 Medly Health, Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#3D9B7F",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-source), system-ui, sans-serif",
                  fontSize: "0.8rem",
                  color: "#7F8C8D",
                }}
              >
                HIPAA Compliant
              </span>
            </div>
            <span style={{ color: "#7F8C8D", opacity: 0.3 }}>&middot;</span>
            <div className="flex items-center gap-2">
              <svg
                width="14"
                height="14"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 1L2 3v3c0 2.8 1.7 5.4 4 6 2.3-.6 4-3.2 4-6V3L6 1z"
                  stroke="#3D9B7F"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeOpacity="0.6"
                />
              </svg>
              <span
                style={{
                  fontFamily: "var(--font-source), system-ui, sans-serif",
                  fontSize: "0.8rem",
                  color: "#7F8C8D",
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
