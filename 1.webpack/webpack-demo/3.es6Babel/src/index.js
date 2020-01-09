
import './css/style.less';

require('@babel/polyfill')

// console.log(123)

// expose-loader 暴露全局的 loader, 内联的 loader，可以直接在代码里面用
// import $ from 'expose-loader?$!jquery'
// console.log('window.$' , window.$)

// 可用 new webpack.ProvidePlugin() 注入到每个模块
console.log('$' , $)



// let fn = () => {
//   console.log(' => 箭头函数')
// }
// fn()

// var status = 'abc'.includes('a')


@log // 装饰器模式
class Person {
  constructor() {
    this.a = 1
  }
}

function log(target) {
  console.log('@log', target, 235)
}



let p = new Person()
console.log('p.a=', p.a)

console.log("hello longwende pack");

