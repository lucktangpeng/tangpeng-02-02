const common = require('./webpack.common.js')
const merge = require('webpack-merge')
const webpack = require('webpack')
module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.less/,
        exclude: /node_modules/,
        loader: ['vue-style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  devServer: {
    hot: true,
    // host: "localhost",
    // port: 9000,
    open: true
    // proxy: {
    //   "/api": {
    //     target: "https://api.github.com",
    //     pathRewrite: {
    //       "^/api": "",
    //     },
    //     changeOrigin: true,
    //   },
    // },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
})
