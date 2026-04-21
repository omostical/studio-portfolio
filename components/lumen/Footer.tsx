"use client";

const columns = [
  {
    title: "Product",
    links: ["Integrations", "Pricing", "Changelog", "Docs", "Security"],
  },
  {
    title: "Company",
    links: ["Careers", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #1F1F22",
        paddingTop: 48,
        paddingBottom: 48,
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div
          className="flex flex-col md:flex-row"
          style={{
            justifyContent: "space-between",
            gap: 40,
            marginBottom: 40,
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 6 }}>
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#E8B931",
                boxShadow: "0 0 8px rgba(232, 185, 49, 0.4)",
                marginTop: 5,
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-manrope)",
                fontWeight: 600,
                fontSize: 16,
                color: "#EDEDEF",
                letterSpacing: "-0.02em",
              }}
            >
              lumen
            </span>
          </div>

          {/* Link columns */}
          <div style={{ display: "flex", gap: 64 }}>
            {columns.map((col) => (
              <div key={col.title}>
                <div
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: 12,
                    fontWeight: 500,
                    color: "#5A5A5C",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: 16,
                  }}
                >
                  {col.title}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {col.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: 13,
                        color: "#8B8B8D",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#EDEDEF")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#8B8B8D")
                      }
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #1F1F22",
            paddingTop: 24,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: 12,
              color: "#5A5A5C",
            }}
          >
            Built for operators, by operators.
          </span>
          <span
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: 12,
              color: "#5A5A5C",
            }}
          >
            &copy; 2026 Lumen Labs, Inc.
          </span>
        </div>
      </div>
    </footer>
  );
}
