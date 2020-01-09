const { SyncHook } = require('tapable')

class Lesson {
  constructor() {
    this.hooks = {
      arch: new SyncHook(['name'])
    }
  }
  
  // 注册监听函数
  tap() {
    this.hooks.arch.tap('node', name => {
      console.log('node', name)
    })
  
    this.hooks.arch.tap('react', name => {
      console.log('react', name)
    })
  }
  
  start() {
    // call() 让这个函数执行
    this.hooks.arch.call('前端开发')
  }
}

const ls = new Lesson()
ls.tap() // 注册这两个事件
ls.start() // 启动钩子
