'use strict';

const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'script.js',
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.html$/,
      use: 'text-loader'
    }]
  },
  devServer: {
    contentBase: './dist',
    compress: true,
    overlay: {
      errors: true
    },
    port: 8081,
    host: 'localhost'
  }
}