const http = require("http")
const fs = require("fs")

http
  .createServer((request, response) => {
    console.log("request come", request.url)
    
    if (request.url === '/') {
      const html = fs.readFileSync("index.html", "utf8")
  
      response.writeHead(200, {
        'Content-Type': 'text/html',
        // csp
        // 'Content-Security-Policy': 'default-src http: https:',
        'Content-Security-Policy': 'default-src \'self\' https://cdn.bootcss.com',
        // 多个 cookie，设置过期时间
        'Set-Cookie': ['id=12; max-age=3', 'user=lucy', 'time=2000; HttpOnly'],
      })
      response.end(html)
    }
  })
  .listen(3200)
console.log("server is runing on 3200")
