/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        retrocompute: ['"retrocompute"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
