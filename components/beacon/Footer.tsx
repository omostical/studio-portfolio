"use client";

export default function Footer() {
  const links = [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Docs", href: "#" },
    { label: "Changelog", href: "#" },
    { label: "Twitter", href: "#" },
    { label: "GitHub", href: "#" },
  ];

  return (
    <footer
      style={{
        paddingTop: 32,
        paddingBottom: 32,
        borderTop: "1px solid #27272A",
        background: "#09090B",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            alignItems: "center",
          }}
          className="md:!flex-row md:!justify-between"
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#4ADE80",
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 14,
                fontWeight: 500,
                color: "#FAFAFA",
              }}
            >
              beacon
            </span>
          </div>

          {/* Nav links */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 24,
              justifyContent: "center",
            }}
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  fontSize: 13,
                  color: "#71717A",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#FAFAFA")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "#71717A")
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 12,
              color: "#71717A",
            }}
          >
            &copy; 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
