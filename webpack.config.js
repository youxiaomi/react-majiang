var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: false,
  entry: [
	'babel-polyfill',
    'webpack/hot/dev-server',
    './index'
  ],
  output: {
    filename: 'static/bundle.js',
  },
	plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
      },
    ]
  }
}
