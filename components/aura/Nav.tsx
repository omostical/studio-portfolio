"use client";

import { useEffect, useState } from "react";

const navLinks = ["Platform", "Solutions", "Customers", "Company"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textColor = scrolled ? "#1A1A1A" : "#FFFFFF";
  const mutedColor = scrolled ? "#6B6B6B" : "rgba(255,255,255,0.7)";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(250,248,245,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
        transition: "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(-8px)",
        transitionProperty: "background, border-color, backdrop-filter, opacity, transform",
        transitionDuration: "0.4s, 0.4s, 0.4s, 0.5s, 0.5s",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="md:px-10"
      >
        <span
          className="font-display"
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            color: textColor,
            letterSpacing: "-0.02em",
            transition: "color 0.4s",
          }}
        >
          aura
        </span>

        <div
          className="font-body hidden md:flex"
          style={{ gap: "32px", alignItems: "center" }}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontSize: "0.9rem",
                color: mutedColor,
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = textColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = mutedColor)}
            >
              {link}
            </a>
          ))}
        </div>

        <div
          className="font-body"
          style={{ display: "flex", alignItems: "center", gap: "20px" }}
        >
          <a
            href="#"
            className="hidden md:inline"
            style={{
              fontSize: "0.9rem",
              color: mutedColor,
              textDecoration: "none",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = textColor)}
            onMouseLeave={(e) => (e.currentTarget.style.color = mutedColor)}
          >
            Learn more
          </a>
          <a
            href="#"
            style={{
              fontSize: "0.875rem",
              fontWeight: 500,
              color: scrolled ? "#FFFFFF" : "#1A1A1A",
              background: scrolled ? "#1A1A1A" : "rgba(255,255,255,0.9)",
              padding: "8px 20px",
              borderRadius: "100px",
              textDecoration: "none",
              transition: "background 0.4s, color 0.4s, opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Get started
          </a>
        </div>
      </div>
    </nav>
  );
}
