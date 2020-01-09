const { smart } = require('webpack-merge')
const base = require('./webpack.config.js')

// 运行 npm run test -- --config webpack.test.js
module.exports = smart(base, {
  mode: 'test'
})
