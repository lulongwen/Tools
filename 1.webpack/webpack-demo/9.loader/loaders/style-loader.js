// style-loader 中导出一个脚本字符串，动态创建 style 和样式
const utils = require('loader-utils')

function styleLoader(source) {
  // 脚本字符串
  let str = `
    let style = document.createElement('style')
    style.innerHTML = ${JSON.stringify(source)}
    document.head.appendChild(style)
  `
  return str
}

// style-loader 上写了 pitch
// style-loader less-loader!css-loader!./index.less
styleLoader.pitch = function(remainingRequest) {
  // 剩余的请求 remainingRequest
  // 让 style-loader 去处理 less-loader!css-loader/./index.less
  
  // require路径，返回的就是 css-loader处理好的结果
  // require('!!css-loader!less-loader!index.less')
  // let req = utils.stringifyRequest(this)
  
  let str = `
    let style = document.createElement('style')
    style.innerHTML = require(${utils.stringifyRequest(this, '!!'+ remainingRequest)})
    document.head.appendChild(style)
  `
  return str
}

module.exports = styleLoader




















