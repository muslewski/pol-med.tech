/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#000000", // Light variant
          dark: "#FFFFFF", // Dark variant
        },
        secondary: {
          light: "#ffffff", // Light variant
          dark: "#040030", // Dark variant
        },
      },
      fontFamily: {
        raleway: ['"Raleway"', "sans-serif"],
        lobsterTwo: ['"Lobster Two"', "sans-serif"],
        exo: ['"Exo"', "sans-serif"],
      },
      dropShadow: {
        logoDark: [
          "0 4pt 4pt rgba(4, 0, 48, 0.25)",
          "0 0 2pt rgba(4, 0, 48, 0.35)",
        ],
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
        navigationAccent: [
          "0 0 12px rgba(54, 47, 140, 0.7)",
          "0 0 24px rgba(129, 121, 210, 0.5)",
        ],
      },
      boxShadow: {
        navigationBlack: "0 4px 4px rgba(4, 0, 48, 0.25)",
        contactInner: "inset 0 4px 8px rgba(255, 255, 255, 0.3)",
      },
    },
  },
  plugins: [],
};
