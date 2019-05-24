# IE8浏览器兼容

## respond.min.js
* Respond IE8 以下支持媒体查询
* 让IE6-8以及其它不支持 CSS3 Media Queries（CSS3媒体查询） 的浏览器提供媒体查询的
    * min-width 和 max-width 特性，实现响应式网页设计 Responsive Web Design


## html5shiv.js
* 让低版本浏览器【IE8以下】不支持html5元素


## css3-mediaqueries
* 解决IE9以下浏览器不支持CSS3 media queries

```jsx
<script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>

<!--[if lt IE 9]>
	<script src="//cdn.bootcss.com/html5shiv/r29/html5.min.js"></script>
	<script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->

<!--[if lt IE 9]>
	<script src="js/html5shiv.js"></script>
<![endif]-->

<!--[if lte IE 8]>
	<style>body {font-family:Arial, sans-serif;}</style>
<![endif]-->

```