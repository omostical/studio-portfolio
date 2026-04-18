"use client";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Product", href: "#product" },
  { label: "Pricing", href: "#pricing" },
  { label: "Results", href: "#proof" },
];

export default function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(9, 9, 11, 0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid #27272A",
      }}
    >
      <div
        className="max-w-[1280px] mx-auto px-6 md:px-10"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 56,
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            textDecoration: "none",
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 15,
            fontWeight: 500,
            color: "#FAFAFA",
            letterSpacing: "-0.02em",
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#4ADE80",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          beacon
        </a>

        {/* Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hidden md:inline"
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontSize: 14,
                fontWeight: 400,
                color: "#A1A1AA",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FAFAFA")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#A1A1AA")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#cta"
          style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 14,
            fontWeight: 500,
            color: "#09090B",
            background: "#FBBF24",
            padding: "8px 18px",
            borderRadius: 2,
            textDecoration: "none",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#F59E0B";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#FBBF24";
          }}
        >
          Get started
        </a>
      </div>
    </nav>
  );
}
