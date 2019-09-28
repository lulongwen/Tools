# 前后端分离前端 Mock数据的方法

* Node.js 搭建一个服务器模拟后台
  * [GraphQL](https://graphql.cn)

* json-server.js
  * 支持 get, post, delete, patch, options 

* mock.js 第三方框架模拟数据
  * 缺点： 
  * 没有 json-server使用方便
  * 不能跨域使用
  * 无法定义复杂结构

* APIJSON
  * https://github.com/APIJSON/APIJSON

* 请求本地 json文件，返回数据
  * 配合 Charles使用

```jsx

npm install -g json-server
  npm run json:server 启动json-server
	npm run json:server:remote
  https://github.com/typicode/json-server

```



## 1 Node.js 搭建一个后台服务
* 如果项目是用 webpack搭建的，webpack-dev-server的本地服务器和新建的 Node服务器肯定不是同一个，
  * 必然会存在跨域问题，要在 webpack 配置文件的 proxy配置后台代理，或用 axios设置代理
  * json-server的代理是： http://localhost:3000



## 2 Mock.js
* https://easy-mock.com



### 常用假数据
* [随机身份证号](http://sfz.diqibu.com)
* [时间戳转换](http://www.diqibu.com/timestamp.html)
* []()
* []()




## json-server.js

参考资料
* https://www.jianshu.com/p/9cfc5cdb0aeb



## 请求本地数据
* 新建个文件夹用来存放测试用的 json文件
* Charles