/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        background: {
          light: "#F8FAFC",
          dark: "#0B1120",
        },

        card: {
          light: "#FFFFFF",
          dark: "#111827",
        },

        border: {
          light: "#E2E8F0",
          dark: "#334155",
        },

        text: {
          light: "#0F172A",
          dark: "#F8FAFC",
        },

        muted: {
          light: "#64748B",
          dark: "#94A3B8",
        },

        success: "#22C55E",
        danger: "#EF4444",
        warning: "#F59E0B",
        primary: "#3B82F6",
      },

      boxShadow: {
        card:
          "0 8px 24px rgba(15,23,42,0.08)",

        glow:
          "0 0 25px rgba(59,130,246,.35)",

        green:
          "0 0 25px rgba(34,197,94,.30)",
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },

      transitionDuration: {
        400: "400ms",
      },

      fontFamily: {
        sans: [
          "Inter",
          "sans-serif",
        ],
      },
    },
  },

  plugins: [],
};