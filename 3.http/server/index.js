const http = require("http")

http
  .createServer((request, response) => {
    console.log("request come", request.url)

    // 设置跨域
    response.writeHead(200, {
      // "Access-Control-Allow-Origin": "*", // 不安全，只能设置一个值
      "Access-Control-Allow-Origin": "http://localhost:3200",
      "Access-Control-Allow-Headers": "X-Test-Cors",
      "Access-Control-Allow-Methods": "Post, Put, Delete",
      // 1000秒之内，不再需要发送预请求
      "Access-Control-Max-Age": "1000",
    })
    response.end("http success")
  })
  .listen(8000)
console.log("server is runing on 8000")
