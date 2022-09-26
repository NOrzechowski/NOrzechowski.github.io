module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('postcss-import')({
      addModulesDirectories: ["node_modules", "assets/custom-css"]
    }),
    require("tailwindcss")("./_includes/tailwind.config.js"),
    require("autoprefixer")
  ]
};