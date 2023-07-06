const path                = require("path");
const htmlWebpackPlugin   = require("html-webpack-plugin");

module.exports = {
  mode: whichMode(),
  entry: "./src/import.js",
  output: {
    path: path.resolve(__dirname, "build"),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/template.html"
    }),
  ]
}

function whichMode() {
  return process.env.NODE_ENV === 'development' ? 'development' : 'production'
}