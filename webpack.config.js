const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const pkg = require("./package.json");
const userscriptMeta = require("./scripts/webpack/add_meta");

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    filename: "webpack.user.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  externals: {
    react: "React",
    "react-dom/client": "ReactDOM",
  },
  module: {
    rules: [
      {
        test: /\.(?:jsx|tsx|js|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react",
              "@babel/preset-typescript",
              ["@babel/preset-env", { targets: "defaults" }],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "VM userscript",
      template: "index.html",
    }),
    userscriptMeta(pkg),
  ],
  devtool: "cheap-module-source-map",
  devServer: {
    static: "./dist",
    hot: true,
  },
  // optimization: {
  //   runtimeChunk: "single",
  // },
};
