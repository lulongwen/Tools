const path = require('path')
const webpack = require('webpack')

// 多线程来打包
const Happypack = require('happypack')

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  
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
        // 打包 js
        use: 'Happypack/loader?id=js',
        exclude: /node_modules/,
        include: path.resolve('src'),
      },
      
      // css 多线程打包
      {
        test: /\.css$/i,
        use: 'Happypack/loader?id=css'
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    
    // 引用动态链接库，写代码时，会先查找，找不到再打包
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, 'dist', 'manifest.json')
    }),
    new webpack.IgnorePlugin(/\.\/locale/, /moment/),
    
    new Happypack({
      id: 'css',
      use: ['style-loader', 'css-loader']
    }),
    new Happypack({
      id: 'js',
      // happypack use 必须是个数组
      use: [
        {
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            }
          }
        }
      ]
    })
  ]
}
