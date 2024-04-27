/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Vazir", ...fontFamily.sans],
      },
      colors: {
        primary: {
          900: "rgb(74, 109, 255)",
          800: "rgb(92, 124, 255)",
          700: "rgb(110, 138, 255)",
          600: "rgb(128, 153, 255)",
          500: "rgb(146, 167, 255)",
          400: "rgb(164, 182, 255)",
          300: "rgb(183, 197, 255)",
          200: "rgb(201, 211, 255)",
          100: "rgb(219, 226, 255)",
        },
        secondary: {
          900: "rgb(17, 24, 39)",
          800: "rgb(31, 41, 55)",
          700: "rgb(55, 65, 81)",
          600: "rgb(75, 85, 99)",
          500: "rgb(107, 114, 128)",
          400: "rgb( 156, 163, 175)",
          300: "rgb(209, 213, 219)",
          200: " rgb(229, 231, 235)",
          100: "rgb (243, 244, 246)",
          50: "rgb(249, 250, 251)",
          0: "rgb(255, 255, 255)",
        },
      },
    },
  },
  plugins: [],
};
