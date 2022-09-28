module.exports = {
    content: ["./_includes/*.{html,js,md}", 
              "./_posts/*.{html,js,md}", 
              "./_layouts/*.{html,js,md}"],
    darkMode: false,
    theme: {
      extend: {},
    },
    variants: {},
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }