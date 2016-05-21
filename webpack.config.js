const path = require('path');
const webpack = require('webpack');

// Plugins being used in the webpack build process.
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  entry: {
    'bethel.ui': './src/core/core',
    'bethel.ui.min': './src/core/core'
  },
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.s?css$/, loader: ExtractTextPlugin.extract(['css?-minimize', 'sass']) },
      { test: /\.html$/, loader: 'html?attrs=false' },
      { test: /\.svg$/, loader: 'svg-inline' }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      include: /\.min\.js$/
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.min\.css$/,
      cssProcessorOptions: { discardComments: { removeAll: true } }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    alias: {
      'animate.css': path.resolve(__dirname, './node_modules/animate.css/source'),
      'assets': path.resolve(__dirname, './src/assets'),
      'md-icons': path.resolve(__dirname, './node_modules/material-design-icons')
    }
  },
  sassLoader: {
    outputStyle: 'expanded'
  }
};
