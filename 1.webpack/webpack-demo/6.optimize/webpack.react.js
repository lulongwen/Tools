// 独立打包 react， react-dom，开发时，直接引用这个js文件
// dllPlugin
const path = require('path')
const webpack = require('webpack')

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: 'development',
  entry: {
    // test: './src/react-test.js',
    react: ['react', 'react-dom']
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ab', // 库的名字
    libraryTarget: 'commonjs', // 模块规范
  },
  // output: {
  //   filename: '_dll_[name].[hash].js',
  //   path: path.resolve(__dirname, 'dist'),
  //   library: '_dll_[name]', // 库的名字 _dll_react
  //   // libraryTarget: 'commonjs', // 模块规范
  // },
  
  devServer: {
    port: 3000,
    contentBase: './dist'
  },
  
  module: {
    // 不去解析 jquery中的依赖库
    noParse: /jquery/,
    rules: [
      {
        test: /\.js$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        },
        exclude: /node_modules/,
        include: path.resolve('src'),
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    // 动态链接库配置
    new webpack.DllPlugin({
      name: '_dll_[name]',
      context: __dirname, // 不填，在web网页中找不到 '_dll_[name]' 报错
      path: path.resolve(__dirname, 'dist', 'manifest.json')
    }),
  ]
}

