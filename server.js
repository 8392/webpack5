const express = require('express')
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js')
const app = express()

const compiler = webpack(config);

app.use(middleware(compiler, { serverSideRender: true }));


app.listen(3000, () => console.log('Example app listening on port 3000!'))

// 通过node启动一个服务，监听文件变化，但是要手动刷新