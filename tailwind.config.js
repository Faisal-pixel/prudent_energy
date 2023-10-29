/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        custom: "1200px"
      },
      colors: {
        primaryBlue: "#05376A",
        secondaryBackground: "#FAFAFB",
        greyDark: "#808080",
        greyLight: "#FAFAFB",
        secondaryGreen: "#47B65C",
        figmaRed: "#FF0000"
      },
      transitionProperty: {
        "height": "height",
        "oveflow": "overflow"
      },
      screens: {
        custom_970: "970px"
      }
    },
  },
  plugins: [],
}

