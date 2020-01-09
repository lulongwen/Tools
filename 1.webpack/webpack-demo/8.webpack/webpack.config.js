const path = require("path")

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
    filename: "bundle.[hash:8].js", // 显示8位 hash
    // publicPath: 'https://lulongwen.com/' // 打包的HTML 加上公共路径
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
    })
  ],
  
  // 优化项
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new OptimizeCSSAssetsPlugin({})
    ],
  },
}
