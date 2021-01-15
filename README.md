# url-loader   需要安装  file-loader

webpack --watch  每次更新了代码了，就打包

"start": "webpack serve --progress",

# tree shaking 只支持ES Module方式的引入
import  静态引入
common js 动态引入

# sideEffects 定义那些文件不需要tree-shaking

"sideEffects": [
  "*.css"
],

