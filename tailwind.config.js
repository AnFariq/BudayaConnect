/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warna-warna inspirasi budaya Indonesia
        primary: {
          50: "#fef7ee",
          100: "#fdecd9",
          200: "#fad4b3",
          300: "#f6b585",
          400: "#f19056",
          500: "#ed6f2e",
          600: "#dd5a1f",
          700: "#b84618",
          800: "#953819",
          900: "#7a3019",
        },
        secondary: {
          50: "#f8f9fa",
          100: "#e9ecef",
          200: "#dee2e6",
          300: "#ced4da",
          400: "#adb5bd",
          500: "#6c757d",
          600: "#495057",
          700: "#343a40",
          800: "#212529",
          900: "#0d1117",
        },
        // Warna emas dan perunggu khas Indonesia
        gold: {
          50: "#fffdf0",
          100: "#fefce8",
          200: "#fef9c3",
          300: "#fef08a",
          400: "#fde047",
          500: "#facc15",
          600: "#eab308",
          700: "#ca8a04",
          800: "#a16207",
          900: "#854d0e",
        },
        bronze: {
          50: "#fdf8f6",
          100: "#f7ede8",
          200: "#ead4c7",
          300: "#d9b18f",
          400: "#c28e5f",
          500: "#a67c52",
          600: "#8b5a3c",
          700: "#724432",
          800: "#5c3729",
          900: "#4a2c22",
        },
        // Warna batik dan alam Indonesia
        batik: {
          50: "#fdf4ff",
          100: "#fae8ff",
          200: "#f5d0fe",
          300: "#f0abfc",
          400: "#e879f9",
          500: "#d946ef",
          600: "#c026d3",
          700: "#a21caf",
          800: "#86198f",
          900: "#701a75",
        },
        nature: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        // Warna merah dan cokelat khas Indonesia
        indonesia: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "batik-pattern":
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23facc15' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      boxShadow: {
        cultural:
          "0 10px 25px -5px rgba(222, 90, 31, 0.1), 0 10px 10px -5px rgba(222, 90, 31, 0.04)",
        gold: "0 20px 25px -5px rgba(250, 204, 21, 0.1), 0 10px 10px -5px rgba(250, 204, 21, 0.04)",
      },
    },
  },
  plugins: [],
};
