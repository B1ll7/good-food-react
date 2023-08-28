/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          gray_c1: '#D2D2D2',
          gray_c2: '#C2C2C2',
          gray_c3: '#979797',
          gray_c4: '#3B3B3B',
          gray_c5: '#2B2B2B',
          yellow_c1: '#E9BC90',
          yellow_c2: '#804A14'
        }
      },
    },
    plugins: [],
}