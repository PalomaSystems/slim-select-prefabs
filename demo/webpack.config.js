const path = require("path");
module.exports = [
  {
    entry: {
      index: "./js/index.js",
    },
    mode: "development",
    devtool: "cheap-module-source-map",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
      ],
    },
    resolve: {
      extensions: ["*", ".js", ".ts", ".tsx"],
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "dist/js"),
    },
  },
];
