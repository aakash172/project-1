/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#F5385D',
      },
    },
    // screens: {
    //   'vss': '100px',
    //   // => @media (min-width: 640px) { ... }

     
    // },
  },
  plugins: [],
}