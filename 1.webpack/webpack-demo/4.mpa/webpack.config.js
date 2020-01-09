const path = require("path")
const webpack = require('webpack')

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 压缩 css
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')


// node 模块规范
module.exports = {
  // production | development
  mode: "production",
  
  // 多入口配置
  entry: {
    index: './src/index.js',
    home: './src/home.js',
    other: './src/other.js'
  },
  output: {
    // path 路径必须是一个绝对路径
    path: path.resolve(__dirname, "dist"),
    // [name] home, index
    filename: "[name].[hash:8].js"
  },
  
  // 开发服务器配置
  devServer: {
    port: 8000, // 端口
    contentBase: './dist',
    // progress: true, // 显示进度条
    // compress: true, // 压缩代码
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
    // 多个入口需要多个 html模板
    new HtmlWebpackPlugin({
      template: './index.html', // 模板路径
      filename: 'index.html', // 输出的文件名
      hash: true,
      chunks: ['index'], // 要引入的代码块
    }),
    new HtmlWebpackPlugin({
      template: './home.html',
      filename: 'home.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true
      },
      hash: true,
      chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      template: './other.html',
      filename: 'other.html',
      hash: true,
      chunks: ['other']
    }),
    
    // 抽离 css
    new MiniCssExtractPlugin({
      // filename: 'style.css',
      filename: '[name].css',
      chunkFilename: 'css/[id].css'
    }),
    
    // 在每个模块中都注入 $, 不是在全局 window 中注入
    // new webpack.ProvidePlugin({
    //   $: 'jquery'
    // }),
  
    // 清除文件
    new CleanWebpackPlugin(),
  ],
  
  // 优化项
  optimization: {
    // 分隔代码块
    splitChunks: {
      cacheGroups: { // 缓存组
        common: { // 公共的模块
          chunks: 'initial', // async默认, all 推荐，initial
          minSize: 0, // 大小
          minChunks: 2 // 用过 2次以上
        },
        vendor: {
          priority: 1, // 权重
          test: /node_modules/, // 抽离 node_modules目录
          chunks: 'initial',
          minSize: 0,
          minChunks: 2
        }
      }
    },
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
