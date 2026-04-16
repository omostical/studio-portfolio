"use client";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Portfolio Overview", href: "#" },
      { label: "Predictive Maintenance", href: "#" },
      { label: "Financial Intelligence", href: "#" },
      { label: "Tenant Communication", href: "#" },
      { label: "Integrations", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Webinars", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Press", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "GDPR", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#1A1A2E",
        color: "rgba(245,241,235,0.6)",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(245,241,235,0.08)" }}
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
                  color: "#F5F1EB",
                  fontFamily: "var(--font-dm-serif), Georgia, serif",
                }}
              >
                Haven
              </span>
            </div>
            <p
              className="text-sm leading-relaxed max-w-[240px] mb-6"
              style={{ color: "rgba(245,241,235,0.45)" }}
            >
              Property intelligence for modern portfolios. See everything. Optimize
              everywhere.
            </p>
            <div className="flex items-center gap-4">
              {["X", "Li", "Gh"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="w-8 h-8 rounded-md flex items-center justify-center transition-colors duration-200 text-xs font-medium"
                  style={{
                    background: "rgba(245,241,235,0.06)",
                    color: "rgba(245,241,235,0.4)",
                    fontFamily: "var(--font-ibm-mono), monospace",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(245,241,235,0.1)";
                    e.currentTarget.style.color = "#F5F1EB";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(245,241,235,0.06)";
                    e.currentTarget.style.color = "rgba(245,241,235,0.4)";
                  }}
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4
                className="text-[10px] uppercase tracking-widest font-medium mb-4"
                style={{
                  color: "rgba(245,241,235,0.3)",
                  fontFamily: "var(--font-ibm-mono), monospace",
                }}
              >
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "rgba(245,241,235,0.5)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#F5F1EB")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          "rgba(245,241,235,0.5)")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(245,241,235,0.06)" }}
        >
          <span
            className="text-xs"
            style={{
              color: "rgba(245,241,235,0.3)",
              fontFamily: "var(--font-ibm-mono), monospace",
            }}
          >
            &copy; 2026 Haven, Inc. All rights reserved.
          </span>
          <span
            className="text-xs"
            style={{
              color: "rgba(245,241,235,0.2)",
              fontFamily: "var(--font-ibm-mono), monospace",
            }}
          >
            Built in San Francisco
          </span>
        </div>
      </div>
    </footer>
  );
}
