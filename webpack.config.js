const path = require("path");
const mode = process.env.NODE_ENV || "development";
const devMode = mode === "development";
const target = devMode ? "web" : "browserslist";
const devtool = devMode ? "source-map" : undefined;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode,
  target,
  devtool,
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "index.[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "article.html"),
      filename: "article.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "about.html"),
      filename: "about.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "tags.html"),
      filename: "tags.html",
    }),
  ],
};
