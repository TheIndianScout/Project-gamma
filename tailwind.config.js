/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend:{
      fontFamily: {
        plaster: ['Plaster', 'sans-serif '],
        college: ['College', 'sans-serif '],
        mont: ['Montserrat', 'sans-serif '],
        syne: ['Syne', 'sans-serif '],
        sans: ['Roboto', 'Arial', 'sans-serif'], // Adding Google Font
    },
    plugins: [
      require('tailwind-scrollbar-hide') // Add this plugin
    ],
      backgroundImage: {
        'login-bg': "url('/src/assets/login_bg.jpg')",
        'hero': "url('/src/assets/hero.png')",
      }
    }
  },
  plugins: [],
}
