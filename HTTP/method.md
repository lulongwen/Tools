# HTTP请求方式
> 根据 RFC2616标准，现行的HTTP/1.1，有8种请求方式，常用的 get & post & options
* get 获取资源
* post 新建一个资源
* put 在服务器更新资源，客户端提供改变后的完整资源
* patch 在服务器更新资源，客户端提供改变的属性
* delete
* head
* trace
* connect
* options


## options
* HTTP权威指南对Options方法的解释：
  * OPTIONS方法请求web服务器告知其支持的各种功能。可以询问服务器通常支持哪些方法，
  * 或者对某些特殊资源支持哪些方法，有些服务器可能只支持对一些特殊类型的对象使用特定的操作。
* options请求方法响应不能缓存
* 请求只能作为“ping”或者“no-op”方法；或者用来测试服务器的性能

### 当满足一下任意一个条件，就会触发options请求
* token也会触发 options请求
```jsx

1. 使用了下面任一 HTTP 方法： 
  PUT 
  DELETE 
  CONNECT 
  OPTIONS 
  TRACE 
  PATCH 
  
2. 人为设置了对 CORS 安全的首部字段集合之外的其他首部字段。该集合为： 
  Accept 
  Accept-Language 
  Content-Language 
  Content-Type (but note the additional requirements below) 
  DPR 
  Downlink 
  Save-Data 
  Viewport-Width 
  Width 
  
3. Content-Type 的值不属于下列之一: 
  application/x-www-form-urlencoded 
  multipart/form-data 
  text/plain 
4. 请求中的XMLHttpRequestUpload 对象注册了任意多个事件监听器。 
5. 请求中使用了ReadableStream对象。
 ———————————————— 
版权声明：本文为CSDN博主「舰行天下」的原创文章，遵循CC 4.0 by-sa版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/sinat_23156865/article/details/81106710
```

### options的用途
  * 获取服务器支持的HTTP请求方法；也是黑客经常使用的方法
  * 用来检查服务器的性能。例如：
    * AJAX进行跨域请求时的预检，需要向另外一个域名的资源发送一个HTTP OPTIONS请求头，用以判断实际发送的请求是否安全


## 跨域
* 跨域分为简单请求和复杂请求
1. 简单请求
  * 不需要发送Options嗅探请求，但是只能发送简单的get/head/post请求
  * 且不能自定义http的headers
  * 
2. 复杂请求
  * 包含preflighted请求和preflighted认证请求
  * 复杂请求在发送真正的请求前会提前发送一次Options请求（嗅探、预检请求）
  * XHR会根据返回的Access-Control-*等头信息判断是否有对指定站点的访问权限，检查该请求是否是可靠安全的
  * 如果options获得的回应是拒绝性质的（或者没有权限）返回405错误，会停止发送实际请求信息