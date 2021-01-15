const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

const devConfig =  {
  mode: 'development',
  performance: { hints: false },//关闭 webpack 的性能提示
  devtool: 'eval-cheap-source-map', //开发环境
  devServer: {
    hot: true,
    // hotOnly: true,
    port: 9000,
    inline: true,
    // compress: true,
    contentBase: path.resolve(__dirname, '../', 'src/index.html'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {  //优化， tree-shaking
    usedExports: true,  //开发环境
  }
}

module.exports = merge(commonConfig, devConfig)
