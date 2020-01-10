const babel = require('@babel/core')
const utils = require('loader-utils')
// 校验库
const validateOptions = require('schema-utils')
const fs = require('fs')


// loader 的参数就是源代码, this 就是 loader 的上下文 loaderContext
function bannerLoader(source) {
  // 设置缓存 this.cacheable(false) 不要缓存
  // this.cacheable && this.cacheable()
  
  // options 就是 use 里面的 options 配置项
  const options = utils.getOptions(this)
  const cb = this.async()
  
  let schema = {
    type: 'object',
    properties: {
      text: {
        type: 'string'
      },
      filename: {
        type: 'string'
      }
    }
  }
  // 报错的loader
  validateOptions(schema, options, 'banner-loader')
  
  if (options.filename) {
    // 自动添加文件依赖，可以watch到变化
    this.addDependency(options.filename)
    
    fs.readFile(options.filename, 'utf8', (err, data) => {
      console.log('data', data, `/**${data}**/${source}`)
      cb(err, `/**${data}**/${source}`)
    })
  }
  else {
    // 异步的代码不能 return
    console.log('data2', `/**${options.text}**/${source}`)
    cb(null, `/**${options.text}**/${source}`)
  }
}

module.exports = bannerLoader
