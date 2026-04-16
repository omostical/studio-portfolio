"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Product", href: "#product" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#proof" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(250,250,248,0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(24,24,27,0.06)",
      }}
    >
      <div
        className="max-w-[1280px] mx-auto px-6 md:px-10"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}
      >
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
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
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: 32 }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "var(--font-jakarta)",
                fontSize: 14,
                fontWeight: 500,
                color: "#71717A",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#18181B")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#71717A")}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: 12 }}>
          <a
            href="#"
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: 14,
              fontWeight: 500,
              color: "#71717A",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#18181B")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#71717A")}
          >
            Log in
          </a>
          <a
            href="#cta"
            style={{
              fontFamily: "var(--font-jakarta)",
              fontSize: 14,
              fontWeight: 600,
              color: "#FFFFFF",
              background: "#FF6B35",
              padding: "8px 20px",
              borderRadius: 8,
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#E55A2B")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#FF6B35")}
          >
            Get started free
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            style={{ display: "block", width: 22, height: 2, background: "#18181B", borderRadius: 2 }}
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            style={{ display: "block", width: 22, height: 2, background: "#18181B", borderRadius: 2 }}
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            style={{ display: "block", width: 22, height: 2, background: "#18181B", borderRadius: 2 }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              overflow: "hidden",
              background: "#FAFAF8",
              borderBottom: "1px solid rgba(24,24,27,0.08)",
            }}
          >
            <div className="px-6 pb-6" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: 16,
                    fontWeight: 500,
                    color: "#18181B",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "var(--font-jakarta)",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#FFFFFF",
                  background: "#FF6B35",
                  padding: "12px 20px",
                  borderRadius: 8,
                  textDecoration: "none",
                  textAlign: "center",
                  marginTop: 8,
                }}
              >
                Get started free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
