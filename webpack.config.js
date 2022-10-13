const path = require('path');

const rules = [
    {
        test: /\.js$/,
        exclude: /node-modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            },
        }
    },
]

module.exports = {
    entry: path.join(__dirname, '/assets/js/app.js'),
    output: {
      path: path.join(__dirname, '/assets/bundled'),
      filename: "bundle.js"
    },
    module: {rules},
  };