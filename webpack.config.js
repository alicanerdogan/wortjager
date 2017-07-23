const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  devtool: 'cheap-module-source-map',
  devServer: {
    compress: true,
    historyApiFallback: true
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.bundle.[hash].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true
            }
          }, 'sass-loader']
        })
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      Util: path.resolve(__dirname, 'src/utils/'),
      Icons: path.resolve(__dirname, 'src/icons/'),
      Containers: path.resolve(__dirname, 'src/containers/'),
      Components: path.resolve(__dirname, 'src/components/'),
      Actions: path.resolve(__dirname, 'src/actions/'),
      Config: path.resolve(__dirname, 'src/config/'),
      Img: path.resolve(__dirname, 'src/img/')
    }
  },
  plugins: [
    new ExtractTextPlugin('index.min.[contenthash].css'),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
