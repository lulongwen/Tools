// 钩子是同步的
class SyncHook {
  constructor(args) {
    this.queue = []
  }
  
  tap(name, task) {
    this.queue.push(task)
  }
  
  call(...args) {
    this.queue.forEach(task =>  task(...args))
  }
}

let hook = new SyncHook(['name'])
hook.tap('react', function(name) {
  console.log('react', name)
})

hook.tap('node', function(name) {
  console.log('node', name)
})
