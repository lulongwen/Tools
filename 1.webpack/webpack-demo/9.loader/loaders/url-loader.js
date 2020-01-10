const utils = require('loader-utils')
const mime = require('mime')

// base64 固定格式, 图片类型：jpg png gif
// data:image/jpg;base64,

function urlLoader(source) {
  const {limit} = utils.getOptions(this)
  let type = mime.getType(this.resourcePath)
  let base64 = source.toString('base64')
  
  if (limit && limit > source.length) {
    return `module.exports="data:${type};base64,${base64}"`
  }
  else {
    let file = require('./file-loader').call(this, source)
    return file
  }
}

// 把字符串转为 二进制 Buffer
urlLoader.raw = true
module.exports = urlLoader
