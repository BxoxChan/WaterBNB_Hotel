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
        Login: "0 0px 10px 2px whitesmoke",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Ubuntu: ["Ubuntu", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
      },
      backgroundColor: {
        //Cust: "bg-gradient-to-r from-violet-600 via-violet-600 to-blue1",
        Cust: "from-violet-600 to-indigo-600",
        // Cust: "linear-gradient(90deg, rgba(240,2,246,1) 0%, rgba(252,5,255,1) 33%, rgba(6,158,250,1) 66%)",
      },
      boxShadowColor: {},
    },
  },
  plugins: [],
};
