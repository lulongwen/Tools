const express = require('express')
const app = express()
// 在服务端启动 webpack
const webpack = require('webpack')

// 中间件
const middleDev = require('webpack-dev-middleware')
const config = require('./webpack.config.js')
const compiler = webpack(config)

// app.use 使用中间件
app.use(middleDev(compiler))

// 服务端 localhost:3000
app.get('/user', (req, res) => {
  res.json({ name: 'webpack-dev-middleware', age: 2800})
})

app.listen(3000)
