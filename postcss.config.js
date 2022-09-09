module.exports = {
    plugins: [
      require('postcss-import')({
        addModulesDirectories: ["_sass/", "node_modules/"]
      }),
      require('tailwindcss'),
      require('autoprefixer'),
      ...(process.env.JEKYLL_ENV == "production"
        ? [require('cssnano')({ preset: 'default' })]
        : [])
    ]
};
