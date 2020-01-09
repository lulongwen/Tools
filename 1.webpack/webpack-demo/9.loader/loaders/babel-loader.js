const babel = require('@babel/core')
const utils = require('loader-utils')

// loader 的参数就是源代码, this 就是 loader 的上下文 loaderContext
function babelLoader(source) {
  // options 就是 use 里面的 options 配置项
  const options = utils.getOptions(this)
  const cb = this.async()
  // console.log('loader', JSON.stringify(Object.keys(this)), source)
  
  //
  babel.trnasform(source, {
    ...options,
    sourceMap: true,
    // 获取文件名，否则为 unknown，resourcePath 文件路径
    filename: this.resourcePath.split('/').pop()
  }, (err, result) => {
    // 异步
    cb(err, result.code, result.map)
  })
  
  return source
}

module.exports = babelLoader
