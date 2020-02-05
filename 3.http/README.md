# HTTP 协议原理

* http 协议：基于TCP、IP通信协议，通过万维网服务器传输数据到本地浏览器的应用层协议
* https：http + ssl
* websocket：有HTML5规范提出的一个在单个TCP连接上进行全双工通信的应用层协议


## HTTP 协议最简单的案例
   
- 输入 URL 打开网页
- Ajax 获取数据
- img 标签加载图片



## 1 HTTP 协议基础及发展历史

### 1.1 五层网络模型
### 1.2 HTTP 协议发展历史
### 1.3 HTTP 的三次握手
### 1.4 URI & URL & URN
### 1.5 HTTP 报文格式
### 1.6 创建一个最简单的 web 服务


## 2 Http 各种特性

### 2.1 Http 客户端
### 2.2 [CORS跨域请求的限制和解决方法](1.docs/2.http)
### 2.3 Cache-Control 缓存头
### 2.4 Last-Modified 缓存验证
### 2.5 Cookie & Session
### 2.6 Http 长连接
### 2.7 数据协商
### 2.8 Redirect
    * 301 永久重定向，有缓存，使用要清除缓存
    * 302 临时重定向

### 2.9 CSP
    * 限制加载内容，限制全局的，限制一部分的
    * [Content-Security-Policy](https://developer.mozilla.org/zh-CN/docs/Glossary/CSP)


## 3 Nginx 代理及面向未来的 Http

### 3.1 Nginx 安装
### 3.2 Nginx 代理配置和代理缓存
### 3.3 Https 解析
### 3.4 使用 Nginx 部署 Https 服务
### 3.5 Http2 的优势和 Nginx 配置 Http2



