/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue1: "#279EFF",
      },
      boxShadow: {
        shadowCust: "19px 21px 25px -17px rgba(0,0,0,0.25)",
        shadowTwo: "2px 13px 25px -7px rgba(0,0,0,0.28)",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Ubuntu: ["Ubuntu", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};