/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        coffee: "#4B2E0A",
        gold: "#C8922A",
        forest: "#2D6A2D",
        navy: "#1A3557",
        tan: "#F5ECD7",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        display: ["Playfair Display", "serif"],
        body: ["DM Sans", "sans-serif"],
        displayAlt: ["Cormorant Garamond", "serif"],
      },
      animation: {
        'fade-in': 'fadeInUp 0.8s ease forwards',
        'float': 'float 15s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(20px, -30px) rotate(5deg)' },
          '66%': { transform: 'translate(-10px, 20px) rotate(-5deg)' },
        },
      },
    },
  },
  plugins: [],
};