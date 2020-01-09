const { smart } = require('webpack-merge')
const base = require('./webpack.config.js')

// 生产加上优化项
// 运行 npm run prod -- --config webpack.prod.js
module.exports = smart(base, {
  mode: 'development',
  // optimization: {
  //   minimizer: []
  // },
  // plugins: []
})
