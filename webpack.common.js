const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const assetsPath = path.join(__dirname, 'assets');
const webTarget = path.join(__dirname, 'dist');

module.exports = {
  context: assetsPath,
  entry: './js/index.jsx',
  output: {
    path: path.resolve(webTarget, 'webpack'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.jsx$$/,
        use: [
          {
            loader: 'babel-loader',
            options: {}
          }
        ]
      }
    ],
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  stats: {
    colors: true
  },
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new HtmlWebpackPlugin({
      template: 'index.ejs'
    }),
    new CopyWebpackPlugin([
      {from:'image', to:'image'}
    ])
  ],
  devServer: {
    contentBase: webTarget,
    compress: true,
    port: 9000
  }
};
