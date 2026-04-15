import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#060A14",
        ink: "#0C1220",
        ink2: "#111827",
        rim: "#1E2D48",
        cloud: "#EDE8DC",
        mist: "#6B7A8F",
        ember: "#B8935A",
        ember2: "#CBA96A",
        jade: "#28966E",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      maxWidth: {
        layout: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
