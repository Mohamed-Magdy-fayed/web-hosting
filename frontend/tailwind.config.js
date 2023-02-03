/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: '#34a853',
        blue: '#4285f4',
        orange: '#fbbc05',
        red: '#ea4335',
      }
    },
  },
  plugins: [],
}