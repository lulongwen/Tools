const http = require("http")
const fs = require("fs")

http
  .createServer((request, response) => {
    console.log("request come", request.url)
    
    if (request.url === '/') {
      const html = fs.readFileSync("index.html", "utf8")
  
      response.writeHead(200, {
        'Content-Type': 'text/html'
      })
      response.end(html)
    }
  
    if (request.url === '/script.js') {
      response.writeHead(200, {
        'Content-Type': 'text/javascript',
        // 服务端缓存了，内容更新，显示还是之前的内容
        // 'Cache-Control': 'max-age=200',
        'Cache-Control': 'max-age=200, public'
      })
      
      let str = 'console.log("script loaded")'
      response.end(str)
    }
  })
  .listen(3200)
console.log("server is runing on 3200")
