module.exports = {
  plugins: [
    require('postcss-easy-import')({
      extensions: [".scss", ".css"], 
      addModulesDirectories: ["_sass"]
    }),
    require('precss'),
    require('tailwindcss')
  ]
};