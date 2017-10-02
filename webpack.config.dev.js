const webpack = require('webpack');
const defaultConfig = require('./webpack.config');

defaultConfig.plugins = defaultConfig.plugins.concat([
  new webpack.EnvironmentPlugin({
    NODE_ENV: 'development'
  })  
]);

module.exports = defaultConfig;
