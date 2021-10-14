"use strict";

const path = require("path");

module.exports = {
  mode: "production",
  devtool: false,
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js",
    pathinfo: true
  },
  optimization: {
    minimize: false,
  },
};
