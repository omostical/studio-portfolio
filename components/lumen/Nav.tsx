"use client";

import { motion } from "framer-motion";

const navLinks = ["Product", "Integrations", "Pricing", "Docs"];

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        height: 52,
        background: "#0C0C0E",
        borderBottom: "1px solid #1F1F22",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="max-w-[1280px] mx-auto px-6 md:px-10"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#E8B931",
              boxShadow: "0 0 8px rgba(232, 185, 49, 0.4)",
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

        {/* Center links */}
        <div
          className="hidden md:flex"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
        >
          {navLinks.map((link) => (
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
              onMouseEnter={(e) => (e.currentTarget.style.color = "#EDEDEF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8B8B8D")}
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#"
          style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: 13,
            fontWeight: 500,
            color: "#0C0C0E",
            background: "#E8B931",
            padding: "6px 18px",
            borderRadius: 100,
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Start free
        </a>
      </div>
    </motion.nav>
  );
}
