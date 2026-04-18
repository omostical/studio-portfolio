"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const columns = [
  {
    title: "Product",
    links: ["Platform", "Agent OS", "Integrations", "Analytics", "API", "Security"],
  },
  {
    title: "Solutions",
    links: ["Customer Support", "Sales", "Onboarding", "Retail", "Financial Services", "Healthcare"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Press", "Contact", "Partners"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Guides", "Case Studies", "Webinars", "Community", "Status"],
  },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <footer ref={ref} style={{ background: "#1A1A1A", color: "#FFFFFF" }}>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "80px 24px 40px",
        }}
        className="md:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Top: Logo + Columns */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "48px",
              marginBottom: "64px",
            }}
            className="md:!grid-cols-5"
          >
            {/* Logo */}
            <div>
              <span
                className="font-display"
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 600,
                  color: "#FFFFFF",
                  letterSpacing: "-0.02em",
                }}
              >
                aura
              </span>
              <p
                className="font-body"
                style={{
                  fontSize: "0.875rem",
                  color: "#999999",
                  marginTop: "12px",
                  lineHeight: 1.6,
                }}
              >
                Better customer experiences,
                <br />
                powered by AI agents.
              </p>
            </div>

            {/* Link Columns */}
            {columns.map((col) => (
              <div key={col.title}>
                <h4
                  className="font-body"
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#999999",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "20px",
                  }}
                >
                  {col.title}
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {col.links.map((link) => (
                    <li key={link} style={{ marginBottom: "12px" }}>
                      <a
                        href="#"
                        className="font-body"
                        style={{
                          fontSize: "0.875rem",
                          color: "#CCCCCC",
                          textDecoration: "none",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#FFFFFF")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#CCCCCC")
                        }
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: "24px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <span
              className="font-body"
              style={{ fontSize: "0.8rem", color: "#666666" }}
            >
              &copy; 2026 Aura Technologies, Inc. All rights reserved.
            </span>
            <div
              className="font-body"
              style={{ display: "flex", gap: "24px" }}
            >
              {["Privacy", "Terms", "Cookies", "Sitemap"].map((item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    fontSize: "0.8rem",
                    color: "#666666",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#999999")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#666666")
                  }
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @media (min-width: 768px) {
          .md\\:!grid-cols-5 {
            grid-template-columns: 1.2fr 1fr 1fr 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
