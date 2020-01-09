const { smart } = require('webpack-merge')
const base = require('./webpack.config.js')

// 运行 npm run dev -- --config webpack.dev.js
module.exports = smart(base, {
  mode: 'development',
  // devServer: {},
  // devtool: 'source-map'
})
