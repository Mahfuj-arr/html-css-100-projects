/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
   theme: {
    extend: {
      colors: {
        primary: '#E1E1E1',
        secondary: '#343434',
      },
      fontFamily: {
        body: ['Inter', 'Arial','sans-serif'],
      },
    },
  },
  plugins: [],
}

