"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Platform", href: "#features" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "rgba(245,241,235,0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(26,26,46,0.06)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "#1A1A2E" }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1L14 5V11L8 15L2 11V5L8 1Z"
                stroke="#C9855E"
                strokeWidth="1.5"
                fill="none"
              />
              <path d="M8 5L11 7V11L8 13L5 11V7L8 5Z" fill="#C9855E" />
            </svg>
          </div>
          <span
            className="text-lg font-semibold tracking-tight"
            style={{
              color: "#1A1A2E",
              fontFamily: "var(--font-dm-serif), Georgia, serif",
            }}
          >
            Haven
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "#6B6B7A" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#1A1A2E")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#6B6B7A")
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#demo"
            className="text-sm font-medium transition-colors duration-200"
            style={{ color: "#1A1A2E" }}
          >
            See a demo
          </a>
          <a
            href="#trial"
            className="text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200"
            style={{
              background: "#C9855E",
              color: "#FFFFFF",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#B5754E")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "#C9855E")
            }
          >
            Start free trial
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-5 h-0.5 rounded-full"
            style={{ background: "#1A1A2E" }}
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block w-5 h-0.5 rounded-full"
            style={{ background: "#1A1A2E" }}
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-5 h-0.5 rounded-full"
            style={{ background: "#1A1A2E" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(245,241,235,0.98)",
              borderBottom: "1px solid rgba(26,26,46,0.08)",
            }}
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-base font-medium"
                  style={{ color: "#1A1A2E" }}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4" style={{ borderTop: "1px solid rgba(26,26,46,0.08)" }}>
                <a
                  href="#demo"
                  className="text-sm font-medium text-center py-2.5 rounded-full"
                  style={{
                    color: "#1A1A2E",
                    border: "1px solid rgba(26,26,46,0.15)",
                  }}
                >
                  See a demo
                </a>
                <a
                  href="#trial"
                  className="text-sm font-semibold text-center py-2.5 rounded-full"
                  style={{ background: "#C9855E", color: "#FFFFFF" }}
                >
                  Start free trial
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
