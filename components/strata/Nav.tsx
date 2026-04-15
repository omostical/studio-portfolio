"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? "rgba(6,10,20,0.93)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
        transition: "background 0.4s, border-color 0.4s",
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(-12px)",
        transitionProperty: "background, border-color, opacity, transform",
        transitionDuration: "0.4s, 0.4s, 0.5s, 0.5s",
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

        <nav className="hidden md:flex items-center gap-8 text-sm font-body text-mist">
          {[
            { label: "Product", href: "#how" },
            { label: "Features", href: "#features" },
            { label: "Pricing", href: "#" },
            { label: "Docs", href: "#" },
          ].map((item) => (
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
            className="text-sm font-medium font-body px-4 py-2 text-void cursor-pointer"
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
        </div>
      </div>
    </header>
  );
}
