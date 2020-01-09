const path = require("path")

// plugins
const htmlWebpackPlugin = require('html-webpack-plugin')



// node 模块规范
module.exports = {
  mode: "development", // 模式， production | development
  entry: "./src/index.js", // 入口
  output: {
    path: path.resolve(__dirname, "dist"), // 路径必须是一个绝对路径
    // filename: "bundle.js" // 打包后的文件名
    // filename: "bundle.[hash].js" // 添加 哈希
    filename: "bundle.[hash:8].js" // 显示8位 hash
  },
  // 开发服务器配置
  devServer: {
    port: 3200, // 端口
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
        // use: ['css-loader'], // 字符串格式
        use: [
          {
            // 对象格式可以传参 options
            loader: 'style-loader',
            options: {
              insert: function insertAtTop(element) {
                var parent = document.querySelector('head');
                // eslint-disable-next-line no-underscore-dangle
                var lastInsertedElement =
                  window._lastElementInsertedByStyleLoader;
                
                if (!lastInsertedElement) {
                  parent.insertBefore(element, parent.firstChild);
                } else if (lastInsertedElement.nextSibling) {
                  parent.insertBefore(element, lastInsertedElement.nextSibling);
                } else {
                  parent.appendChild(element);
                }
      
                // eslint-disable-next-line no-underscore-dangle
                window._lastElementInsertedByStyleLoader = element;
              },
            },
          },
          /*options: {
            // 将重用单个 <style> ，不是为每个所需的模块添加/删除单个元素
            singleton: true,
            insertAt: 'bottom' // 插入到 head 最上面
          }*/

          'css-loader',
          // { loader: 'css-loader' },
        ],
        exclude: '/node_modules/',
      },
      // 处理 less
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          'css-loader', // !import 解析路径
          'less-loader' // 把 less 转换为 css
        ]
      }
    ]
  },
  
  // plugins 数组，存放所有 webpack plugins
  plugins: [
    new htmlWebpackPlugin({
      template: './index.html', // 模板路径
      filename: 'index.html', // 输出的文件名
      minify: {
        // 压缩，删除空格和属性的双引号
        removeAttributeQuotes: true,
        collapseWhitespace: true
      },
      hash: true
    })
  ]
}
