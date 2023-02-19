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
        steelGray: '#3c3854',
      },
      fontFamily: {
        nunitoSans: "var(--font-nunitoSans)",
        cutmark: "var(--font-cutmark)",
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translate(0,  0px)' },
          '50%': { transform: 'translate(0, 15px)' }
        }
      },
      animation: {
        float: 'floating 3s ease-in-out infinite'
      }
    },
  },
  plugins: [],
};
