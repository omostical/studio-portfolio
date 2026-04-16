const columns = [
  {
    heading: "Product",
    links: ["Overview", "Features", "Pricing", "Integrations", "Changelog", "Docs"],
  },
  {
    heading: "Company",
    links: ["About", "Blog", "Careers", "Press"],
  },
  {
    heading: "Legal",
    links: ["Privacy", "Terms", "Security", "SOC 2 Report", "Cookie Policy"],
  },
];

export default function Footer() {
  return (
    <footer
      className="pt-16 pb-10"
      style={{ borderTop: "1px solid rgba(255,255,255,0.07)", background: "#060A14" }}
    >
      <div className="max-w-layout mx-auto px-6 md:px-10">
        {/* Top row */}
        <div className="grid md:grid-cols-[200px_1fr] gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="/work/strata" className="font-display text-lg font-semibold text-cloud tracking-tight select-none block mb-3" style={{ letterSpacing: "-0.02em" }}>
              Strata
            </a>
            <p className="font-body text-xs text-mist leading-relaxed">
              Revenue recognition that keeps pace with how you actually sell.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {/* Social icons */}
              {[
                {
                  label: "Twitter",
                  path: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
                },
                {
                  label: "LinkedIn",
                  path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="text-mist hover:text-cloud transition-colors duration-150"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-3 gap-8">
            {columns.map((col) => (
              <div key={col.heading}>
                <div className="text-[10px] uppercase tracking-widest font-body text-mist mb-4">
                  {col.heading}
                </div>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-xs font-body text-mist hover:text-cloud transition-colors duration-150"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="text-xs font-body text-mist">© 2025 Strata, Inc. All rights reserved.</div>
          <div className="flex items-center gap-1.5">
            <span className="inline-flex h-1.5 w-1.5 rounded-full" style={{ background: "#28966E" }} />
            <span className="text-xs font-body text-mist">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
