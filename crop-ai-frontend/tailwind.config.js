/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2E7D32",   // green
        secondary: "#A5D6A7",
        accent: "#FFB300",    // yellow
        dark: "#1B5E20"
      }
    },
  },
  plugins: [],
}
