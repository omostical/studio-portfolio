export default function Footer() {
  return (
    <footer
      className="py-10"
      style={{ borderTop: "1px solid rgba(255,255,255,0.07)", background: "#060A14" }}
    >
      <div className="max-w-layout mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="/work/strata" className="font-display text-sm font-semibold text-cloud tracking-tight select-none">
          Strata
        </a>

        <nav className="flex items-center gap-6">
          {["Product", "Pricing", "Security", "Docs", "Blog", "Status"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-xs font-body text-mist hover:text-cloud transition-colors duration-150"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="text-xs font-body text-mist">© 2025 Strata, Inc.</div>
      </div>
    </footer>
  );
}
