const webpack = require('webpack');

module.exports = {
  context: __dirname + "/src",
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bg.bundled.min.js',
    libraryTarget: 'var',
    library: 'svv',
  },
  module: {
    rules: [
      {
        test: /\.(frag|vert)?$/,
        loader: 'raw-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  externals: {
    "THREE": "THREE",
  },
  mode: "development",
};
