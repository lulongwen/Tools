// background: url('2.jpg') 解析图片路径为 require()

function cssLoader(source) {
  // 正则匹配 url, /url()/ -> /url\(\)/ -> /url\((.+?)\)/g
  let reg = /url\((.+?)\)/g
  let pos = 0
  let current
  let arr = ['let list = []']
  
  while(current = reg.exec(source)) {
    // 1 匹配到的路径， 2 分组
    let [matchUrl, g] = current
    let last = reg.lastIndex - matchUrl.length
    console.log(matchUrl, g)
    
    // 2 获取 url前的样式字符串
    let item = `list.push(${JSON.stringify(source.slice(pos, last))})`
    arr.push(item)
    pos = reg.lastIndex
    
    // 把 g，也就是图片路径，替换成 require 写法 => url(require('1.jpg'))
    let url = `list.push('url('+require(${g})+')')`
    arr.push(url)
  }
  
  // push 最后面的代码
  let last = `list.push(${JSON.stringify(source.slice(pos))})`
  arr.push(last)
  // 最后 exports 导出
  arr.push(`module.exports = list.join('')`)
  
  return arr.join('\r\n')
}

module.exports = cssLoader




























