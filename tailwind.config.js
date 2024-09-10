/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,njk,js}"],
  theme: {
    extend: {},
  },
  darkMode: ['selector'],
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
}