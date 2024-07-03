import {nextui} from '@nextui-org/theme'
const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FAFAFA",
        black: "#121723",
        dark: "#1D2430",
        primary: "#5FB5E7",
        sky: "#5FB5E7",
        blue: "#223A59",
        orange: "#F59B64",
        lime: "#CFE276",
        yellow: "#F5E789",
        purple: "#B3ABD7",

        "bg-color-dark": "#171C28",
        "body-color": {
          DEFAULT: "#788293",
          dark: "#959CB1",
        },
      }
      
    },
  },
  
  darkMode: "class",
  plugins: [nextui()],
}
