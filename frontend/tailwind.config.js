/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        Lato: ['Lato', 'sans-serif'],
      },

      colors: {
        primary: '#F9FAF5', //cream
        secondary: '#D3F36B', //lime
        third: '#F5ECE6', //cream older
        fourth: '#24282C', //black
        fifth: '#F2F2ED' //gray
      },
    },
  },
  plugins: [],
}
