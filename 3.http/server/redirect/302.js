const http = require("http")

http
  .createServer((request, response) => {
    console.log("request come", request.url)
    
    if (request.url === '/') {
      // 302 临时重定向，每次都有 /
      // 301 永久重定向，第二次访问不访问 /，慎用，需要清除缓存
      response.writeHead(301, {
        'Location': '/new'
      })
      response.end('')
    }
    
    if (request.url === '/new') {
      response.writeHead(200, {
        'Content-Type': 'text/html'
      })
      response.end('<h1>new.html</h1>')
    }
  })
  .listen(3200)
console.log("server is runing on 3200")
