'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');

const development = {
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'results.html',
      template: 'results.html',
    }),
  ],
  devtool: 'inline-source-map',
};

module.exports = development;
