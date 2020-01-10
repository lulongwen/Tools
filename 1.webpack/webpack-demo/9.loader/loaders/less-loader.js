// 先编译 less，然后再有 css-loader 处理，再然后 style-loader
const less = require('less')

function lessLoader(source) {
  let css
  
  // 渲染 less
  less.render(source, (err, data) => {
    console.log('less', err, data)
    css = data.css
  })
  return css
}

module.exports = lessLoader
