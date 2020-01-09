
class DonePlugin {
  apply(compiler) {
    compiler.hooks.done.tap('DonePlugin', status => {
      console.log('编译完成 DonePlugin')
    })
  }
}

module.exports = DonePlugin
