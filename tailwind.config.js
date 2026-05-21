/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          950: "#030712",
          900: "#0a1020",
          800: "#0d1b2f",
          700: "#123356",
          500: "#1e88e5",
          300: "#7dd3fc"
        }
      },
      boxShadow: {
        glow: "0 20px 60px rgba(30,136,229,.25)",
        glass: "0 12px 40px rgba(7, 14, 28, 0.35)"
      },
      backdropBlur: {
        xs: "2px"
      }
    },
  },
  plugins: [],
};
