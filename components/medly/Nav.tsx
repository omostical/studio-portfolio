"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "How it works", href: "#platform" },
  { label: "Features", href: "#features" },
  { label: "Results", href: "#outcomes" },
  { label: "Contact", href: "#cta" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background:
            scrolled || menuOpen
              ? "rgba(250,250,245,0.85)"
              : "transparent",
          backdropFilter:
            scrolled || menuOpen ? "blur(20px) saturate(1.2)" : "none",
          borderBottom:
            scrolled || menuOpen
              ? "1px solid rgba(45,52,54,0.06)"
              : "1px solid transparent",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(-12px)",
          transitionProperty:
            "background, border-color, backdrop-filter, opacity, transform",
          transitionDuration: "0.5s, 0.5s, 0.5s, 0.8s, 0.8s",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a
            href="/work/medly"
            className="select-none flex items-center gap-2.5"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "#EFF8F4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg
                width="18"
                height="18"
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
                <circle cx="10.5" cy="8" r="1" fill="#3D9B7F" fillOpacity="0.5" />
                <circle cx="15.5" cy="8" r="1" fill="#3D9B7F" fillOpacity="0.5" />
              </svg>
            </div>
            <span
              style={{
                fontFamily: "var(--font-libre), Georgia, serif",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#2D3436",
                letterSpacing: "-0.02em",
              }}
            >
              Medly
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  fontFamily: "var(--font-source), system-ui, sans-serif",
                  fontSize: "0.9rem",
                  fontWeight: 400,
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
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#cta"
              className="hidden md:inline-flex items-center gap-2"
              style={{
                fontFamily: "var(--font-source), system-ui, sans-serif",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#FFFFFF",
                background: "#E8A87C",
                borderRadius: "100px",
                padding: "10px 24px",
                textDecoration: "none",
                transition:
                  "background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                boxShadow: "0 2px 12px rgba(232,168,124,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#E09A6A";
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 24px rgba(232,168,124,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#E8A87C";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 2px 12px rgba(232,168,124,0.2)";
              }}
            >
              See it in action
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-1.5 cursor-pointer"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
              }}
            >
              <motion.span
                className="block w-5 h-px"
                style={{ background: "#2D3436" }}
                animate={
                  menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <motion.span
                className="block w-5 h-px"
                style={{ background: "#2D3436" }}
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block w-5 h-px"
                style={{ background: "#2D3436" }}
                animate={
                  menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 pt-[72px] md:hidden"
            style={{
              background: "rgba(250,250,245,0.98)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="flex flex-col px-6 pt-10 pb-10 gap-0">
              {navLinks.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.06 * i }}
                  className="py-5 select-none"
                  style={{
                    fontFamily: "var(--font-libre), Georgia, serif",
                    fontSize: "1.5rem",
                    color: "#2D3436",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(45,52,54,0.06)",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="mt-10 flex flex-col gap-3"
              >
                <a
                  href="#cta"
                  className="text-center"
                  style={{
                    fontFamily: "var(--font-source), system-ui, sans-serif",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                    color: "#FFFFFF",
                    background: "#E8A87C",
                    borderRadius: "100px",
                    padding: "14px 0",
                    textDecoration: "none",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  See it in action
                </a>
                <a
                  href="#cta"
                  className="text-center"
                  style={{
                    fontFamily: "var(--font-source), system-ui, sans-serif",
                    fontSize: "0.9rem",
                    color: "#7F8C8D",
                    padding: "14px 0",
                    border: "1px solid rgba(45,52,54,0.1)",
                    borderRadius: "100px",
                    textDecoration: "none",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  Talk to our team
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
