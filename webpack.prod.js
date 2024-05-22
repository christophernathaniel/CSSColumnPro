// webpack.prod.js
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Add this line

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      '...',
      new CssMinimizerPlugin()
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'CSSGridPro.css' // Specify the same output CSS file name as in webpack.common.js
    })
  ]
});