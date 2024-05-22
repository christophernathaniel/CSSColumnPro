// webpack.dev.js
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
    historyApiFallback: true,
    hot: true,
    open: true,
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:9000',
        secure: false
      }
    ],
    watchFiles: ['src/**/*.js', 'src/**/*.scss'] // Add this line to watch for changes in both JS and SCSS files
  },
  devtool: 'inline-source-map'
});