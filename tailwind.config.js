/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'hero': "url('/assets/sessao1.jpg')",
        'callaction': "url('/assets/sessao2.jpg')"
      }
    },
  },
  plugins: [],
}

