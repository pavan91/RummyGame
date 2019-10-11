var path = require("path");

module.exports = {
  entry: "index.ts",
  output: {
    filename: "game.js"
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".webpack.js", ".web.js", ".ts", ".js"],
    alias: {
      "pixi.js": "pixi.js/lib/index.js",
      robotlegs: "robotlegs/lib/index.js"
    }
  },
  module: {
    rules: [{ test: /\.ts$/, loader: "ts-loader" }],
    noParse: [/.*(pixi-particles\.js).*/]
  },
  watch: true,
  mode: "development"
};