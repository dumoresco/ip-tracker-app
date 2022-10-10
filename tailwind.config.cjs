/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      sm: "375px",
      md: "900px",
    },
  },
  colors: { white: "#FFF", darkGray: "#18181b", gray: "#969696" },

  plugins: [],
};
