"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkStyle: React.CSSProperties = {
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "#1A1612",
    textDecoration: "none",
  };

  return (
    <nav
      className="font-body"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: scrolled ? "14px 32px" : "24px 32px",
        background: scrolled ? "rgba(245, 241, 232, 0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(26, 22, 18, 0.08)" : "1px solid transparent",
        transition: "padding 0.35s ease, background 0.35s ease, border-color 0.35s ease",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          maxWidth: 1440,
          margin: "0 auto",
        }}
      >
        <div className="hidden md:flex" style={{ gap: 28 }}>
          <a href="#collection" style={linkStyle}>Collection</a>
          <a href="#atelier" style={linkStyle}>Atelier</a>
          <a href="#journal" style={linkStyle}>Journal</a>
        </div>

        <a
          href="#"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: 20,
            letterSpacing: "0.34em",
            fontWeight: 500,
            color: "#1A1612",
            textAlign: "center",
            textDecoration: "none",
          }}
        >
          SEVRIN
        </a>

        <div
          className="hidden md:flex"
          style={{ gap: 28, justifyContent: "flex-end" }}
        >
          <a href="#stockists" style={linkStyle}>Stockists</a>
          <a href="#" style={linkStyle}>Bag (0)</a>
        </div>

        {/* Mobile right-side spacer */}
        <div className="md:hidden" />
        <div className="md:hidden" style={{ justifySelf: "end", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Menu
        </div>
      </div>
    </nav>
  );
}
