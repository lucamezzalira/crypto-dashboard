const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/App.js',
  output: {
    filename: 'App.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        { test: /\.vue$/, loader: 'vue-loader' },
        { test: /\.css$/, loader: 'css-loader' }
    ]
  },
  plugins: [
      new CopyWebpackPlugin([
        { from: './index.html' }
      ]),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      })
  ]
}