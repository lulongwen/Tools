const path = require('path')
const webpack = require('webpack')

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: 'production', // 'development' | 'production'
  entry: './src/index.js',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  
  devServer: {
    port: 8000,
    hot: true, // 启用热更新
    // contentBase: './dist'
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
  
    // 打印更新的模块路径
    new webpack.NamedModulesPlugin(),
    // 热更新插件
    new webpack.HotModuleReplacementPlugin(),
    
    // 引用动态链接库，写代码时，会先查找，找不到再打包
    // new webpack.DllReferencePlugin({
    //   manifest: path.resolve(__dirname, 'dist', 'manifest.json')
    // }),
    new webpack.IgnorePlugin(/\.\/locale/, /moment/),
  ]
}
