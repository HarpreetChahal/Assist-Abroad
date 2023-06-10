/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        pr: "#6D81FE",
        tc : "#23314c",
        wt: "#ffffff",
      }
    },
  },
  plugins: [],
}