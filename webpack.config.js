'use strict';

var webpack = require('webpack');

var reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react',
};

var reactReduxExternal = {
  root: 'React-redux',
  commonjs2: 'react-redux',
  commonjs: 'react-redux',
  amd: 'react-redux',
};

module.exports = {
  externals: {
    'react': reactExternal,
    'react-redux': reactReduxExternal,
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
    ]
  },
  output: {
    library: 'feathers-rematch-react-bidings',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
  ]
};
