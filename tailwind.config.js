/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    transitionDelay: {
      100: "100ms",
      200: "200ms",
      300: "300ms",
      400: "400ms",
      500: "500ms",
      600: "600ms",
      700: "700ms",
      750: "750ms",
      800: "800ms",
      850: "850ms",
      900: "900ms",
      1000: "1000ms",
      1100: "1100ms",
      1200: "1.2s",
      1300: "1.3s",
      1400: "1.4s",
      1500: "1.5s",
    },
  },
  plugins: [],
}