"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Product", href: "#how" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#" },
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled || menuOpen ? "rgba(6,10,20,0.96)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(18px)" : "none",
          borderBottom: scrolled || menuOpen ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
          transition: "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(-12px)",
          transitionProperty: "background, border-color, backdrop-filter, opacity, transform",
          transitionDuration: "0.4s, 0.4s, 0.4s, 0.5s, 0.5s",
        }}
      >
        <div className="max-w-layout mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a
            href="/work/strata"
            className="font-display text-xl font-semibold text-cloud tracking-tight select-none"
            style={{ letterSpacing: "-0.02em" }}
          >
            Strata
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-body text-mist">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-cloud transition-colors duration-150"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden md:block text-sm font-body text-mist hover:text-cloud transition-colors duration-150"
            >
              Sign in
            </a>
            <a
              href="#cta"
              className="hidden md:inline-flex text-sm font-medium font-body px-4 py-2 text-void"
              style={{
                background: "#B8935A",
                borderRadius: "3px",
                transition: "background 0.15s, transform 0.15s, box-shadow 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#CBA96A";
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(184,147,90,0.28)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#B8935A";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Request access
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col items-center justify-center w-9 h-9 gap-1.5 cursor-pointer"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              style={{ background: "transparent", border: "none", outline: "none" }}
            >
              <motion.span
                className="block w-5 h-px bg-cloud"
                animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22 }}
              />
              <motion.span
                className="block w-5 h-px bg-cloud"
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="block w-5 h-px bg-cloud"
                animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
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
            style={{ background: "rgba(6,10,20,0.98)", backdropFilter: "blur(18px)" }}
          >
            <div className="flex flex-col px-6 pt-8 pb-10 gap-0">
              {navLinks.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.22, delay: 0.05 * i }}
                  className="font-display text-2xl text-cloud py-4 border-b select-none"
                  style={{ borderColor: "rgba(255,255,255,0.07)", letterSpacing: "-0.02em" }}
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
                  href="#"
                  className="text-center text-sm font-body text-mist py-3 border rounded"
                  style={{ borderColor: "rgba(255,255,255,0.12)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  Sign in
                </a>
                <a
                  href="#cta"
                  className="text-center text-sm font-medium font-body py-3 text-void"
                  style={{ background: "#B8935A", borderRadius: "3px" }}
                  onClick={() => setMenuOpen(false)}
                >
                  Request access
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
