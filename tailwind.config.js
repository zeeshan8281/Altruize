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
      colors: {
        primary: '#1D1B27',
        secondary: '#4326F3',
        tertiary: '#55D8F9',
      },
      fontFamily: {
        nunitoSans: "var(--font-nunitoSans)",
        cutmark: "var(--font-cutmark)",
      },
    },
  },
  plugins: [],
};
