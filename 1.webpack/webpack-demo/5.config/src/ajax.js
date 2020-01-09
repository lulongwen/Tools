const xhr = new XMLHttpRequest()

// method, url, 是否异步
xhr.open('GET', '/api/user', true)

let data = {}
xhr.onload = function () {
  data = xhr.response
  console.log(xhr.response)
}
xhr.send()

export default xhr
