# Yahoo军规网站优化，如何让用户更快的打开网站
	http://yslow.org  Yslow 网站性能优化工具
	35条之多，技术人员统称为yahoo军规
	网页内容优化
	服务器优化
	Cookie
	CSS
	JavaScript
	图片
	移动客户端
	
	CDN
	代码压缩
	开启Gzip
	异步动态加载
	JSON文件不支持注释，引用时请清除
	能不到服务器去获取数据就尽量不去，用缓存
	只下载一张图片的坚决不下载多张图片，减少服务器请求
	能用CSS实现的效果就不要用JS，减少DOM操作

---


## 1 网页内容优化
+ 减少 HTTP 请求次数
	* 当你打开网页的时候，你所看到的文字，图片，多媒体等，内容都是你从服务器上获取的;
	* 每一个内容的获取就是一个http请求。

+ 减少 `DNS` 查询次数
	* DNS查询有 20ms
	* DNS缓存
		+ IE 30m （30分）
		+ chrome、firefox 60s （60秒）
		+ safari 约为 10s
	* DNS缓存时间长时，减少DNS的重复查找，节省时间
	* DNS缓存时间短时，及时的检测网站服务器的变化，保证正确性
	* 根据自己网站的特点采用 单域、 多域放置资源来减少DNS查询

+ 缓存 Ajax
	* post 每次都执行，不会缓存
	* get 同一地址不重复执行，可以被缓存
	![get-post的区别](get-post.jpg)

+ 延迟加载
	* 比如，图片延迟加载

+ 提前加载

+ 减少DOM元素数量

+ 根据域名划分内容

+ 减少 iFrame 数量

+ 避免 404

+ 减少页面跳转，避免重定向
	* 重定向：用户的原始请求被转向了其他请求
	* 重定向状态码： 301、302
		* 301 被移动到了另外的位置（永久重定向）
		* 302 临时重定向
	* 重定向增加了浏览器和服务器的返回次数，违背了减少http请求次数

---


## 2 服务器
+ 使用 CDN
	* CDN的全称是 Content Delivery Network，即内容分发网络；
	* 尽可能避开互联网上有可能影响数据传输速度和稳定性的瓶颈和环节，让内容传输的更快，更稳定；
	* 多个服务器来实现；

+ 添加 Expires / Cache-Control Head头
	* cache-control 是http协议中常用的头部之一，控制页面的缓存机制
	* 如果该头部指示缓存，缓存的内容也会存在本地，cache-control 有更多的选项
    
	![expire介绍](expire.jpg)

+ 启用 Gzip压缩 传输文件
	* 本地压缩后，上传服务器，服务器再Gzip压缩，文件体积会更小
  * 支持 html, css, javascript, image, txt, xml

+ 配置实体标签 ` Etags `
	* Entity Tag（实体标签）
	* 属于HTTP协议
	* 受web服务支持
	* 类似于文件的版本号

+ 尽早 flash 输出

+ 使用 GET Ajax 请求

+ 避免空的图片 src

---


## 3 Cookie
	* 减少 Cookie 大小
	* 页面内容使用无 Cookie 域名

---


## 4 CSS
+ 将样式表置顶，放在 head区域，避免出现打开浏览器页面空白，页面闪烁

+ 避免 CSS 表达式 ` expressions `
	* CSS表达式是用来把 CSS属性和js关联起来，CSS的值等于JS计算的结果
	* expressions 计算频率：
		+ 页面显示和缩放
		+ 页面滚动
		+ 鼠标移动
		+ 都会计算一次，随便移动一次鼠标，都会计算1万次以上

+ 用 ` <link> ` 代替 @import

+ 避免使用 filters 

---



## 5 JavaScript
+ 将 `script` 放在页面最下面
	* 要知道DOM加载顺序
	* ` html > head > meta > title > style/link:css > body > script `
	* 先将内容呈现出来，如果JS报错或死循环，用户还可以看到页面

+ 把 Javascript 和 CS 都放到外部文件中
	1. 单独提取
		+ 提高了JS和CSS的复用性
		+ 减少了页面体积
		+ 提高了JS和CSS的可维护性
        
	2. 写在页面内
		+ 减少页面请求
		+ 提升页面渲染速度
        
	3. 什么时候写在页面内？
		+ 只应用于一个页面，如404页面，邮件页面
		+ 不经常被访问到
		+ 脚本和样式很少

+ 压缩合并 JavaScript 和 CSS
	* 去除不必要的空白符、格式符、注释符
	* 简写方法名、函数名压缩JS文件
	* 正式上线前，将JS、CSS都进行压缩，让线上版本是最轻量级，大幅提升网站性能。

+ 去除重复脚本

+ 减少对 DOM 的操作
	*《高性能JavaScript》中这么比喻：“把DOM看成一个岛屿，把JavaScript(ECMAScript)看成另一个岛屿，两者之间以一座收费桥连接”；
	* 所以每次访问DOM都会交一个过桥费，而访问的次数越多，交的费用也就越多。所以一般建议尽量减少过桥次数；
	* 合理的使用JavaScript变量储存内容，考虑大量DOM元素中循环的性能开销，在循环结束时一次性写入

+ 使用智能事件处理

---



## 6 图片
* 压缩图片
* 优化 CSS Sprite
* 不要在 HTML 中缩放图片
* 使用小且可以缓存的 favicon.ico

---



## 7 移动客户端
* 保持单个文件小于 25KB
* 打包组件为符合要求的文件

---



## Yslow 网站性能优化工具
1. [Yslow 分析工具](http://yslow.org/mobile/)
	![Grade-页面等级](yslow.jpg)

2. chrome、firefox
3. Rulesets：
	+ YSlow（V2） 22个测试规则
	+ Classic（V1） 13个测试规则
	+ Small Site or Blog 14个测试规则
	+ Grade ：等级视图，网页评分:A - F,A最好
	+ Components：组件视图，检视各个元素占用空间大小
	+ Statistics：统计信息视图，与Components相似
	+ Yslow 对网站进行分析，给一些建议，一些规则；一步一步的优化自己的网站
	
	![Grade-页面等级](grade.jpg)

	![Compenents](components.jpg)