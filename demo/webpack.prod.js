const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ErrorOverlayPlugin = require("error-overlay-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin")

const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});
const errorOverlayPlugin = new ErrorOverlayPlugin();
// const definePlugin = new webpack.DefinePlugin({
//   API_URL: JSON.stringify("https://lms1210.azurewebsites.net"),
//   HOST_URL: JSON.stringify("https://lms.cokecoder.net")
// });

module.exports = {
  entry: "./src/index.js",
  devtool: "none",
  output: {    
    // `chunkFilename` provides a template for naming code-split bundles (optional)
    // chunkFilename: 'app.[hash].js',
    // `publicPath` is where Webpack will load your bundles from (optional)
    // publicPath: 'dist/'
    publicPath: "./",
    // `path` is the folder where Webpack will place your bundles
    // path: './dist',
    path: path.resolve("build"),    
    // `filename` provides a template for naming your bundles (remember to use `[name]`)
    // filename: '[name].bundle.js',
    filename: "app-[hash].js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        use: ["eslint-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          output: {
            comments: false,
            beautify: false
          }
        }
      })
    ]
  },
  plugins: [htmlPlugin, errorOverlayPlugin, new CleanWebpackPlugin()]
};
