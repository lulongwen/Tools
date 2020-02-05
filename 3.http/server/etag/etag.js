const http = require("http")

http
  .createServer((request, response) => {
    console.log("request come", request.url)
  
    response.writeHead(200, {
      'Content-Type': 'text/javascript',
      'Cache-Control': 'max-age=300000, no-cache',
      'Last-Modified': '123',
      'Etag': '888'
    })
    response.end("http success")
    
    
    if (request.url === '/script.js') {
      console.log('request.headers', request.headers)
      const etag = request.headers['if-none-match']
      
      if (etag === '888') {
        response.writeHead(304, {
          'Content-Type': 'text/javascript',
          'Cache-Control': 'max-age=300000, no-cache',
          'Last-Modified': '123',
          'Etag': '888'
        })
        response.send('')
      }
      else {
        response.writeHead(200, {
        
        })
      }
    }
  })
  .listen(8000)
console.log("server is runing on 8000")
