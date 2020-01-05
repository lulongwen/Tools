const path = require("path")

module.exports = {
  mode: "development", // 模式， production | development
  entry: "./src/index.js", // 入口
  output: {
    path: path.resolve(__dirname, "dist"), // 路径必须是一个绝对路径
    filename: "bundle.js" // 打包后的文件名
  },
  devServer: {},
  plugins: [
  
  ],
}
