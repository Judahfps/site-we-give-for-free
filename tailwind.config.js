/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  safelist: [
    'hidden',
    'flex',
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero': "url('/assets/sessao1.jpg')",
        'callaction': "url('/assets/sessao2.jpg')",
        'abrgigo': "url('/assets/abrigo.jpeg')",
        'coracao': "url('/assets/coracao.png')",
        'action': "url('https://www.apple.com/br/education/home/images/overview/spotlight_sisler__evj8rginc38m_large.jpg')",
        'action2': "url('/assets/bg.webp')",
      }
    },
  },
  plugins: [],
}

