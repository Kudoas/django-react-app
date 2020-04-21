const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  watch: true,
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "static/frontend")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
