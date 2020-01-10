const path = require("path")


// 实现 babel-loader
module.exports = {
  mode: "development", // production | development
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"), // 路径必须是一个绝对路径
    // filename: "[name].[hash:8].js",
    filename: "[name].js",
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
  
  // watch: true, // npx webpack 运行，监听文件变化
  module: {
    rules: [
      {
        test: /\.less$/i, // 处理 less
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.jpg$/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 20 * 1024, // 20kb, 1kb= 1024
          }
        },
      },
      {
        test: /\.js$/i,
        use: {
          loader: 'banner-loader',
          options: {
            // 注释首选 options.filename，没有用 text
            text: 'www.lulongwen.com',
            filename: path.resolve(__dirname, 'banner.txt')
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
