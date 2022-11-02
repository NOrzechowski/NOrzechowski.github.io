module.exports = {
  content: [
    './_includes/*.{html,js,md}',
    './_posts/*.{html,js,md}',
    './assets/bundled/*.{html,js}',
    './_layouts/*.{html,js,md}'
  ],
  darkMode: false,
  theme: {
    extend: {
      minHeight: {
        '96': '24rem'
      },
      colors: {
        terminal: '#7AFB4C'
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')]
}
