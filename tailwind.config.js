/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "oils-background": "url('./src/Assets/oils3Background.jpg')",
      },
      zIndex: {
        100: "100",
      },
      colors: {
        primary: {
          light: "#000000", // Light variant
          dark: "#FFFFFF", // Dark variant
        },
        secondary: {
          light: "#ffffff", // Light variant
          dark: "#040030", // Dark variant
          darkEducation: "#040E30", // Dark variant
        },
        acccent: {
          first: "#4035BD",
          second: "#362F8C",
          third: "#100B51",
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
        whiteText: ["0 6px 4px rgba(255, 255, 255, 0.5)"],
        redcert: ["0 4px 1.5px rgba(0, 0, 0, 0.4)"],
        navigationAccent: [
          "0 0 12px rgba(54, 47, 140, 0.7)",
          "0 0 24px rgba(129, 121, 210, 0.5)",
        ],
        glowingText: [
          "0 0 12px rgba(255, 255, 255, 0.5)",
          "0 0 24px rgba(255, 255, 255, 0.3)",
        ],
        glowingTextSubtle: [
          "0 0 12px rgba(255, 255, 255, 0.3)",
          "0 0 24px rgba(255, 255, 255, 0.15)",
        ],
        homeCard: [
          "0 0 12px rgba(54, 47, 140, 0.4)",
          "0 0 24px rgba(129, 121, 210, 0.2)",
        ],
      },
      boxShadow: {
        navigation: [
          "0 4px 4px rgba(199, 199, 255, 0.25)",
          "inset 0 4px 8px rgba(199, 199, 255, 0.3)",
        ],
        glowingTitle: [
          "0 4px 4px rgba(100, 100, 155, 0.25)",
          "inset 0 4px 8px rgba(100, 100, 155, 0.3)",
        ],
        glowingInput: [
          "4px 4px 25px rgba(0, 0, 15, 0.3)",
          "inset 0 4px 4px rgba(0, 0, 0, 0.4)",
        ],
        glowingTools: [
          "0 4px 4px rgba(99, 156, 156, 0.25)",
          "inset 0 4px 8px rgba(99, 156, 156, 0.3)",
        ],
        contactInner: "inset 0 4px 8px rgba(255, 255, 255, 0.3)",
        homeCard: "inset 0 4px 8px rgba(255, 255, 255, 0.1)",
      },
      screens: {
        "2lg": "1100px",
        "3xl": "1650px",
        "5xl": "1850px",
        "7xl": "2050px",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
