"use client";

import { motion } from "framer-motion";

const navLinks = ["Platform", "Solutions", "Customers", "Company"];

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(250, 248, 245, 0.9)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
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
        {/* Logo */}
        <span
          className="font-display"
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#1A1A1A",
            letterSpacing: "-0.02em",
          }}
        >
          aura
        </span>

        {/* Center Links */}
        <div
          className="font-body hidden md:flex"
          style={{
            gap: "32px",
            alignItems: "center",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontSize: "0.9rem",
                color: "#6B6B6B",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#1A1A1A")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#6B6B6B")
              }
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div
          className="font-body"
          style={{ display: "flex", alignItems: "center", gap: "20px" }}
        >
          <a
            href="#"
            className="hidden md:inline"
            style={{
              fontSize: "0.9rem",
              color: "#6B6B6B",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "#1A1A1A")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "#6B6B6B")
            }
          >
            Learn more
          </a>
          <a
            href="#"
            style={{
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "#FFFFFF",
              background: "#1A1A1A",
              padding: "8px 20px",
              borderRadius: "100px",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.opacity = "0.85")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.opacity = "1")
            }
          >
            Get started
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
