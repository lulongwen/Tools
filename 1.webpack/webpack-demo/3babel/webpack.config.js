const path = require("path")
const webpack = require('webpack')

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');


// node 模块规范
module.exports = {
  mode: "development", // production | development
  entry: "./src/index.js", // 入口
  output: {
    path: path.resolve(__dirname, "dist"), // 路径必须是一个绝对路径
    filename: "bundle.[hash:8].js" // 显示8位 hash
  },
  // 开发服务器配置
  devServer: {
    port: 8000, // 端口
    // progress: true, // 显示进度条
    // compress: true, // 压缩代码
    contentBase: './dist',
    // open: true, // 自动打开浏览器
  },
  
  // modules 模块
  module: {
    rules: [
      // 规则，处理 css
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ],
        exclude: '/node_modules/',
      },
      // 处理 less
      {
        test: /\.less$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', // !import 解析路径
          'postcss-loader',
          'less-loader' // 把 less 转换为 css
        ],
        exclude: '/node_modules/',
      },
  
      // eslint
      {
        // previous 之前执行，其它的是普通的 loader，post 之后执行
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      
      // 处理 js 和编译 es6
      {
        test: /\.js$/i,
        use: {
          loader: 'babel-loader',
          options: {
            // 大插件的集合
            presets: [
              // 预设，把 es6 转义为 es5
              '@babel/preset-env'
            ],
            // 小插件还需要配置
            plugins: [
              // 装饰器模式编译
              ['@babel/plugin-proposal-decorators', { "legacy": true }],
              ['@babel/plugin-proposal-class-properties', { 'loose' : true }],
              '@babel/plugin-transform-runtime'
            ]
          }
        },
        exclude: '/node_modules/', // 排除这个目录
        include: path.resolve(__dirname, 'src') // 包括
      },
      
      // 暴露全局变量
      {
        test: require.resolve('jquery'),
        use: 'expose-loader?$'
      }
    ]
  },
  
  // plugins 数组，存放所有 webpack plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // 模板路径
      filename: 'index.html', // 输出的文件名
      minify: {
        // 压缩，删除空格和属性的双引号
        removeAttributeQuotes: true,
        // collapseWhitespace: true
      },
      hash: true
    }),
    
    // 抽离 css
    new MiniCssExtractPlugin({
      // filename: 'style.css',
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    
    // 在每个模块中都注入 $, 不是在全局 window 中注入
    new webpack.ProvidePlugin({
      $: 'jquery'
    })
  ],
  
  // 优化项
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ],
  },
  
  // 引用一个库，又不让webpack打包
  externals: {
    jquery: 'jQuery'
  }
}
