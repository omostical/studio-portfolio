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
            scrolled || menuOpen ? "rgba(15,26,20,0.96)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(18px)" : "none",
          borderBottom:
            scrolled || menuOpen
              ? "1px solid rgba(78,203,160,0.1)"
              : "1px solid transparent",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(-12px)",
          transitionProperty:
            "background, border-color, backdrop-filter, opacity, transform",
          transitionDuration: "0.4s, 0.4s, 0.4s, 0.5s, 0.5s",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/work/medly"
            className="select-none flex items-center gap-2"
            style={{ textDecoration: "none" }}
          >
            <svg
              width="26"
              height="26"
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
              <circle cx="10.5" cy="8" r="1" fill="#4ECBA0" fillOpacity="0.5" />
              <circle cx="15.5" cy="8" r="1" fill="#4ECBA0" fillOpacity="0.5" />
            </svg>
            <span
              style={{
                fontFamily: "var(--font-libre), Georgia, serif",
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#F0EDE5",
                letterSpacing: "-0.02em",
              }}
            >
              Medly
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  fontFamily: "var(--font-source), system-ui, sans-serif",
                  fontSize: "0.875rem",
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
                color: "#0F1A14",
                background: "#4ECBA0",
                borderRadius: "6px",
                padding: "9px 20px",
                textDecoration: "none",
                transition:
                  "background 0.15s, transform 0.15s, box-shadow 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#6AD8B5";
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(78,203,160,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#4ECBA0";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              See it in action
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col items-center justify-center w-9 h-9 gap-1.5 cursor-pointer"
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
                style={{ background: "#F0EDE5" }}
                animate={
                  menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.22 }}
              />
              <motion.span
                className="block w-5 h-px"
                style={{ background: "#F0EDE5" }}
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="block w-5 h-px"
                style={{ background: "#F0EDE5" }}
                animate={
                  menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }
                }
                transition={{ duration: 0.22 }}
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
            transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 pt-16 md:hidden"
            style={{
              background: "rgba(15,26,20,0.98)",
              backdropFilter: "blur(18px)",
            }}
          >
            <div className="flex flex-col px-6 pt-8 pb-10 gap-0">
              {navLinks.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.22, delay: 0.05 * i }}
                  className="py-4 select-none"
                  style={{
                    fontFamily: "var(--font-libre), Georgia, serif",
                    fontSize: "1.5rem",
                    color: "#F0EDE5",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(78,203,160,0.12)",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.25 }}
                className="mt-8 flex flex-col gap-3"
              >
                <a
                  href="#cta"
                  className="text-center"
                  style={{
                    fontFamily: "var(--font-source), system-ui, sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "#0F1A14",
                    background: "#4ECBA0",
                    borderRadius: "6px",
                    padding: "12px 0",
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
                    fontSize: "0.875rem",
                    color: "#7A8F85",
                    padding: "12px 0",
                    border: "1px solid rgba(78,203,160,0.15)",
                    borderRadius: "6px",
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
