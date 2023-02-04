/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2e3192',
        accent: '#fbbc12',
        warn: '#eb4335',
      }
    },
  },
  plugins: [],
}