const path = require("path")


// 实现 babel-loader
module.exports = {
  mode: "development", // production
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"), // 路径必须是一个绝对路径
    filename: "[name].[hash:8].js",
  },
  devServer: {
    port: 8000,
  },
  
  devtool: 'source-map',
  resolveLoader: {
    // 先从 node_modules找，找不到从 loaders文件夹下找
    modules: [
      'node_modules',
      path.resolve(__dirname, 'loaders')
    ],
    // alias: {
    //   loader1: path.resolve(__dirname, 'loaders', 'loader1.js')
    // }
  },
  
  // npx webpack 运行
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: {
          loader: 'banner-loader',
          options: {
            text: 'www.lulongwen.com',
            filename: path.resolve(__dirname, 'banner.js')
          }
        }
      },
      {
        test: /\.js$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ]
          }
        }
      }
    ]
  }
}
