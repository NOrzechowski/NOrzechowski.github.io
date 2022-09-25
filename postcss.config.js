module.exports = {
  parser: 'postcss-scss',
  plugins: [
    require('postcss-import')({
      addModulesDirectories: ["_sass", "node_modules", "assets"]
    }),
    require("tailwindcss")("./_includes/tailwind.config.js"),
    require("autoprefixer")
  ]
};