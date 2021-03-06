const webpack = require('webpack');
const defaultConfig = require('./webpack.config');

defaultConfig.plugins = defaultConfig.plugins.concat([
  new webpack.EnvironmentPlugin({
    NODE_ENV: 'production'
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true
  })
]);

defaultConfig.devtool = 'source-map';

module.exports = defaultConfig;
