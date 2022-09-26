module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('postcss-import')({
      path: "./_sass",
      addModulesDirectories: ["./_sass", "/Users/neilo/dev/git/NOrzechowski.github.io/_sass", "node_modules", "assets/custom-css"]
    }),
    require("tailwindcss")("./_includes/tailwind.config.js"),
    require("autoprefixer")
  ]
};