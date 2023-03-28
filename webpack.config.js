const path = require("path");
const mode = process.env.NODE_ENV || "development";
const devMode = mode === "development";
const target = devMode ? "web" : "browserslist";
const devtool = devMode ? "source-map" : undefined;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode,
  target,
  devtool,
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "build"),
    clean: true,
    filename: "index.[contenthash].js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "index.[contenthash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
};
