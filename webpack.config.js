const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/assets',
    filename: 'js/app.js',
    publicPath: __dirname + '/assets'
  },
  target: 'web',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  node: {
    fs: "empty"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      {
        from: './node_modules/bulma/css/bulma.css',
        to: './css/theme.css'
      }
    ])
  ]
};