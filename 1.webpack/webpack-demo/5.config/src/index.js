import './css/style.less'

// 不用 resolve 引入的路径
// import 'bootstrap/dist/css/bootstrap.css'

// 直接引入，报错  Error: Can't resolve 'jquery'
// ./node_modules/bootstrap/dist/js/bootstrap.js，需要 resolve 配置 alias 路径
import 'bootstrap'

let url = ''
if (DEV === 'dev') {
  url = 'http://localhost:3000'
}
else {
  url = 'http://www.lulongwen.com'
}
console.log('url------------', url, DEV, FLAG, EXPRESSION)


/*const xhr = new XMLHttpRequest()
// method, url, 是否异步
// xhr.open('GET', '/api/user', true)

// devServer before(app) {}
xhr.open('GET', '/user', true)

xhr.onload = function () {
  console.log(xhr.response)
}
xhr.send()*/




console.log("hello longwende pack")
