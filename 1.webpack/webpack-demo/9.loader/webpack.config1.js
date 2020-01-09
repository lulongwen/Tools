const path = require("path")

// plugins
// const HtmlWebpackPlugin = require('html-webpack-plugin')


// node 模块规范
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
  
  resolveLoader: {
    modules: [ // 先从 node_modules找，找不到从 loaders文件夹下找
      'node_modules',
      path.resolve(__dirname, 'loaders')
    ],
    // 别名
    alias: {
      loader1: path.resolve(__dirname, 'loaders', 'loader1.js')
    }
  },
  
  // modules，npx webpack 运行
  module: {
    rules: [
      // js 代码转换
      {
        test: /\.js$/i,
        // use: 'loader1'
        use: path.resolve(__dirname, 'loaders', 'loader1.js')
      }
    ]
  }
}
