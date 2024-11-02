/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryLight: "#71F79F",
        primary: "#0DE75A",
        primaryDark: "#088734",
        primaryLighter: "#9FF9BE",
        secondary: "#02260F",
        secondaryLight: "#C5FCDA",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
