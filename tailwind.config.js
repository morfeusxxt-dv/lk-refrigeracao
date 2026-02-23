/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0066cc", // Stronger blue
        secondary: "#0052a3", // Darker blue for contrast
        accent: "#e6f2ff", // Light blue background
        "background-light": "#ffffff",
        "background-dark": "#f8fafc", // Slate 50
        "card-light": "#ffffff",
        "text-main": "#334155", // Slate 700
        "text-heading": "#0f172a", // Slate 900
        "text-muted": "#64748b", // Slate 500
      },
      fontFamily: {
        display: ["Fredoka", "sans-serif"],
        body: ["Nunito", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "3rem",
        full: "9999px",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
        hover: "0 10px 25px -5px rgba(0, 102, 204, 0.15)",
      },
    },
  },
  plugins: [],
};
