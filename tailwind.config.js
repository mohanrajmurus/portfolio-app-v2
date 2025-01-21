/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", "serif"],
      },
      colors:{
        textPrimary:"#f2f3f4",
        background:"#191924",
        textSecondary:"#b1b2b3",
        paragraph:"#9c9da1",
        purple:"#854ce6"
      }
    },
  },
  plugins: [],
};
