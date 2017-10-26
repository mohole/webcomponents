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
  }
}