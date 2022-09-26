module.exports = {
    content: ["./**/*.{html,js,md}"],
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