/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunitoSans: "var(--font-nunitoSans)",
        cutmark: "var(--font-cutmark)",
      },
      colors: {
        primaryBg: "#1D1B26",
      },
    },
  },
  plugins: [],
};
