/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "oklch(96.5% 0.012 75)",
        surface: "oklch(98.5% 0.006 75)",
        elevated: "oklch(99% 0.003 75)",
        text: "oklch(18% 0.008 60)",
        muted: "oklch(48% 0.012 60)",
        "text-inv": "oklch(92% 0.006 75)",
        border: "oklch(88% 0.008 75)",
        "border-strong": "oklch(78% 0.012 75)",
        accent: "oklch(68% 0.16 85)",
        "accent-hover": "oklch(58% 0.16 85)",
        "accent-subtle": "oklch(92% 0.04 85)",
        ink: "oklch(12% 0.004 60)",
        red: "oklch(50% 0.2 25)",
        navy: "oklch(25% 0.03 260)",
        forest: "oklch(38% 0.06 145)",
      },
      fontFamily: {
        sans: ["DM Sans", "system-ui", "-apple-system", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
        mono: ["JetBrains Mono", "SF Mono", "Monaco", "monospace"],
        display: ["Playfair Display", "Georgia", "serif"],
        body: ["DM Sans", "system-ui", "-apple-system", "sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      animation: {
        "fade-in": "fadeInUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
