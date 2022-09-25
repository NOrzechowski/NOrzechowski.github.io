module.exports = {
    content: ["./**/*.{html,js}"],
    purge: [
    ],
    darkMode: false,
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }