const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
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
        test: /\.s[ac]ss$/i,
        use: [
          // // 将 JS 字符串生成为 style 节点
          // "style-loader",
          // // 将 CSS 转化成 CommonJS 模块
          // {
          //   loader: "css-loader",
          //   options: {
          //     importLoaders: 2,
          //     // 0 => no loaders (default);
          //     // 1 => postcss-loader;
          //     // 2 => postcss-loader, sass-loader
          //   },
          // },
          // // 将 Sass 编译成 CSS
          // "sass-loader",
          // // 加上前缀
          // "postcss-loader"
          "style-loader",
          {
            loader: "css-loader",
            options: {
              // 每一个 CSS 的 `@import` 都运行 `postcss-loader`，不要忘了 `sass-loader` 将不属于 CSS 的 `@import` 编译到一个文件中
              // 如果您需要在每个 CSS 的 `@import` 上运行 `sass-loader` 和 `postcss-loader`，请将其设置为 `2`。
              importLoaders: 2,
              // 对于满足 `/\.module\.\w+$/i` 正则匹配发热文件自动启用 css 模块。
              // modules: { auto: true },
              modules: true //启用css-modules，通过style.class调用的方式，避免冲突
            },
          },
          "postcss-loader",
          "sass-loader",
          // 也可能是 `less-loader`
        ],
      },
    ]
  }
}