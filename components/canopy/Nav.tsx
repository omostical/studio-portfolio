"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Platform", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Results", href: "#metrics" },
  { label: "Security", href: "#trust" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(11,15,30,0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(59,130,246,0.08)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                background: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
                fontSize: 18,
                color: "#E4E8F0",
                letterSpacing: "-0.02em",
              }}
            >
              Canopy
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "var(--font-outfit)",
                  fontSize: 14,
                  fontWeight: 400,
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
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#cta"
              style={{
                fontFamily: "var(--font-outfit)",
                fontSize: 14,
                fontWeight: 500,
                color: "#E4E8F0",
                textDecoration: "none",
                padding: "8px 20px",
                borderRadius: 8,
                background: "#3B82F6",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#2563EB")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#3B82F6")
              }
            >
              Schedule a demo
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
            }}
            aria-label="Toggle menu"
          >
            <div style={{ width: 24, height: 18, position: "relative" }}>
              <span
                style={{
                  display: "block",
                  width: 24,
                  height: 2,
                  background: "#E4E8F0",
                  borderRadius: 1,
                  position: "absolute",
                  top: mobileOpen ? 8 : 0,
                  transform: mobileOpen ? "rotate(45deg)" : "none",
                  transition: "all 0.3s",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 24,
                  height: 2,
                  background: "#E4E8F0",
                  borderRadius: 1,
                  position: "absolute",
                  top: 8,
                  opacity: mobileOpen ? 0 : 1,
                  transition: "all 0.3s",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: 24,
                  height: 2,
                  background: "#E4E8F0",
                  borderRadius: 1,
                  position: "absolute",
                  top: mobileOpen ? 8 : 16,
                  transform: mobileOpen ? "rotate(-45deg)" : "none",
                  transition: "all 0.3s",
                }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              overflow: "hidden",
              background: "rgba(11,15,30,0.98)",
              borderBottom: "1px solid rgba(59,130,246,0.08)",
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: "var(--font-outfit)",
                    fontSize: 16,
                    color: "#6B7FA0",
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
                  fontFamily: "var(--font-outfit)",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#E4E8F0",
                  textDecoration: "none",
                  padding: "10px 20px",
                  borderRadius: 8,
                  background: "#3B82F6",
                  textAlign: "center",
                  marginTop: 8,
                }}
              >
                Schedule a demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
