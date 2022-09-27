module.exports = {
  parser: require('postcss-scss'),
  plugins: [
    require('postcss-easy-import')({
      extensions: [".scss", ".css"], 
      addModulesDirectories: ["_sass"]
    }),
    require('precss'),
    require('tailwindcss')
  ]
};



