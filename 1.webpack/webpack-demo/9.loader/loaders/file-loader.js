const utils = require('loader-utils')

function fileLoader(source) {
  // 目的就是根据图片生成一个 md5 ，emit 发射到dist目录下
  // file-loader 要返回当前的图片路径
  const filename = utils.interpolateName(this, '[hash].[ext]', {content: source})
  
  this.emitFile(filename, source) // 发射文件
  return `module.exports="${filename}"`
}

// 字符串转 二进制， Buffer模式
fileLoader.raw = true
module.exports = fileLoader
