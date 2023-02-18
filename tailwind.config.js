/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'grey-light': '#FCFBFB',
      },
    }
  },
  plugins: [],
}
