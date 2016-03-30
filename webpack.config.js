const webpack = require('webpack');

module.exports = {
  entry: {
   'bethel.ui': './src/core/core',
   'bethel.ui.min': './src/core/core',
  },
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.html$/, loader: 'html?attrs=false' }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
