const express = require('express')
const app = express()

// 服务端 localhost:3000
app.get('/user', (req, res) => {
  res.json({ name: 'lulongwen.com', data: 800, age: 28})
})

app.listen(3000)
