const path = require("path")
const webpack = require('webpack')

// plugins html模板
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 压缩 css
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

// 清除-复制文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')


// node 模块规范
module.exports = {
  mode: "development", // production | development
  entry: "./src/index.js", // 入口
  output: {
    path: path.resolve(__dirname, "dist"), // 路径必须是一个绝对路径
    filename: "bundle.[hash:8].js", // 显示8位 hash
    // publicPath: 'https://lulongwen.com/' // 打包的HTML 加上公共路径
  },
  // 开发服务器配置
  devServer: {
    port: 8000, // 端口
    // 前端单纯模拟数据， app 是 express 服务器
    // before(app) {
    //   app.get('/user', (req, res) => {
    //     res.json({name: 'lu', full: 'lucy', age: 30})
    //   })
    // },
    
    // 配置一个代理，重写把请求代理到 express 服务器上
    proxy: {
      // '/api': 'http://localhost:3000', 所有的请求都在 3000 端口找
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {'/api': ''}
      }
    },
    // progress: true, // 显示进度条
    // compress: true, // 压缩代码
    contentBase: './dist',
    // open: true, // 自动打开浏览器
  },
  
  // modules 模块
  module: {
    rules: [ // 规则
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
      
      // 打包图片
      {
        test: /\.html?$/i,
        use: 'html-withimg-loader'
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   use:[
      //     {
      //       loader: "file-loader",
      //       options: { esModule: false },
      //     }
      //   ]
      // },
      
      // url-loader 做个限制，当一个图片小于多少 kb 用 base64 来转化
      // 否则用 file-loader 引入图片路径
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 30 * 1024, // 小于多少 字节
            // 打包图片分类
            outputPath: '/images/',
            publicPath: 'https://www.lulongwen.com',
            esModule: false
          }
        }
      },
    ]
  },
  
  // plugins 数组，存放所有 webpack plugins
  plugins: [
    // html模板
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
      // filename: 'css/style.css',
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    
    new webpack.DefinePlugin({
      // DEV: 'dev' , // dev = console.log(dev)， 变量未定义，JSON.stringify('dev')
      DEV: "'production'" , // 'production' | 'dev'
      FLAG: 'true', // typeof FLAG blolean
      EXPRESSION: '1+1', // 表达式，最后输出的是计算结果 2
    }),
    
    // 清除-复制文件
    new CleanWebpackPlugin(),
    // new CopyWebpackPlugin([
    //   {from: 'docs', to: 'docs'}
    // ]),
    // new webpack.BannerPlugin('user by longwen 2019')
  ],
  
  // 解析，第三方包 commonjs规范
  resolve: {
    modules: [
      path.resolve('node_modules'),
      // path.resolve('dist')
    ],
    // mainFiles: [], // 入口文件的名字 index.js
    mainFields: ['style', 'main'], // 主入口字段，默认是 main
    extensions: ['.js', '.css', '.json', '.vue'], // 后缀名
    // 别名配置，例如 vue = vue.runtime
    // alias: {
    //   bootstrap: 'bootstrap/dist/css/bootstrap.css'
    // }
  },
  
  // 优化项
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ],
  },
}
