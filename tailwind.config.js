/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}', // Add the paths where Tailwind can find your dynamic classes
    './test.html',
    './src/assets/index.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}