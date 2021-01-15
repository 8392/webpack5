const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: {
    // main: '../src/index.js',
    // react: '../src/react.js'
    main: path.resolve(__dirname, '../', 'src/index2.js'),
    // main: path.resolve(__dirname, '../', 'src/index.js'),
    // react: path.resolve(__dirname, '../', 'src/react.js'),
  },
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", //连接的桥梁
          options: {
            // presets: [['@babel/preset-env']] //把ES6语法翻译成ES5语法
            // presets: [['@babel/preset-env', {'useBuiltIns': 'usage'}]], //把ES6语法翻译成ES5语法,useBuiltIns只打包使用到的ES语法
            // "plugins": [["@babel/plugin-transform-runtime", {// 避免全局污染
            //   "absoluteRuntime": false,
            //   "corejs": 2,
            //   "helpers": true,
            //   "regenerator": true,
            //   "useESModules": false,
            //   "version": "7.0.0-beta.0"
            // }]]
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'images',
              limit: 1024
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,   // 处理字体
        use: {
          loader: 'file-loader',
          options: {
            name: `assets/[name].[hash:5].[ext]`,
            publicPath: '/'
          }
        }
      },
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              esModule: false,
              // 每一个 CSS 的 `@import` 都运行 `postcss-loader`，不要忘了 `sass-loader` 将不属于 CSS 的 `@import` 编译到一个文件中
              // 如果您需要在每个 CSS 的 `@import` 上运行 `sass-loader` 和 `postcss-loader`，请将其设置为 `2`。
              importLoaders: 2,
              // 对于满足 `/\.module\.\w+$/i` 正则匹配发热文件自动启用 css 模块。
              // modules: { auto: true },
              // modules: false //启用css-modules，通过style.class调用的方式，避免冲突
            },
          },
          "postcss-loader",
          "sass-loader",
          // 也可能是 `less-loader`
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../', 'src/index.html')
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['../dist', path.resolve(__dirname, '../abc')],  //需要删除的文件目录，默认是output输出的目录
      dangerouslyAllowCleanPatternsOutsideProject: true,
      verbose: false,        　　　　　　　　　　//开启在控制台输出信息
      dry: false        　　　　　　　　　　//启用删除文件 true不删除，false删除
    }),
    new MiniCssExtractPlugin({
      // 类似于 webpackOptions.output 中的选项
      // 所有选项都是可选的
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  optimization: {
    usedExports: true,
    splitChunks: {  //默认配置，异步引入的js，默认分割
      // chunks: 'async',
      // minSize: 20000,
      // minRemainingSize: 0,
      // maxSize: 0,
      // minChunks: 1,
      // maxAsyncRequests: 30,
      // maxInitialRequests: 30,
      // enforceSizeThreshold: 50000,
      // cacheGroups: {
      //   defaultVendors: {
      //     test: /[\\/]node_modules[\\/]/,
      //     filename: '[name].bundle.js',
      //     priority: -10,
      //     reuseExistingChunk: true
      //   },
      //   default: {
      //     minChunks: 2, //最少使用两次才分割
      //     priority: -20,
      //     filename: '[name].bundle.js',
      //     reuseExistingChunk: true
      //   }
      // }
    }
  }
}