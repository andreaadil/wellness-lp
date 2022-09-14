/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        darkGray: "#0E1318",
        darkerBlue: "#3E6365",
        lightBlue: "#D9E7E8",
        lightPink: "#E8DAD9"
      }
    },
  },
  plugins: [],
}
