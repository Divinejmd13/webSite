/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Garamond"],
        bodyFont: ["Alpina"],
        bodyFontLight: ["Alpina-Light"]
      },
      colors: {
        darkGrey: "#3C422E",
        lightBackground: "#f6e6d9",
        highlight: "#FFF4EC",
        greyText: "#9d9b8d",
        buttonGreen: "#d1e030"
      }
    },

  },
  plugins: [],
}

