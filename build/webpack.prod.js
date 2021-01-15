const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

prodConfig = {
  mode: 'production',
  performance: { hints: false },//关闭 webpack 的性能提示
  // devtool: 'cheap-source-map',//生成环境.
  devtool: 'eval-cheap-source-map', //开发环境
}

module.exports = merge(commonConfig, prodConfig)