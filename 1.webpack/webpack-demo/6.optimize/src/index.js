import React from 'react'
import { render } from 'react-dom'

import calc from './calc.js'
// require 默认导出是个对象，用 calc.default.sum(1,2) 调用
// let calc = require('./calc.js')
console.log(calc.sum(1,2))


// scope hosting 作用域提升, webpack中自动省略可以简化的代码
let a = 1
let b = 2
let c = 3
let d = a + b + c
console.log('=====', d)


let btn = document.createElement('button')
btn.innerText = '点击呀'

// 点击加载资源
btn.addEventListener('click', () => {
  // import 原理，jsonp 实现动态加载文件
  import('./source.js').then(data => {
    console.log('data', data.default)
  })
})

document.body.appendChild(btn)


// 热更新
import hot from './source'
console.log('hot data', hot)
if (module.hot) {
  module.hot.accept('./source.js', () => {
    console.log('source 更新了')
  })
}


render(
  <div>
  <h1>react jsx</h1>
  </div>,
  document.getElementById('app')
)
