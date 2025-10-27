/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bluePrimary: "#2563EB",
        pinkAccent: "#EC4899",
        tanBg: "#FAF3E0",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}