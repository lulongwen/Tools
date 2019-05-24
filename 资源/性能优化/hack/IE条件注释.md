# IE 条件注释

```
<!--[if lt IE 7 ]> <html lang="zh-CN" class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html lang="zh-CN" class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html lang="zh-CN" class="no-js ie8"> <![endif]-->
<!--[if IE 9 ]>    <html lang="zh-CN" class="no-js ie9"> <![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html lang="zh-CN" class="no-js">
<!--<![endif]-->
```


## //判断IE浏览器

````
var ie = /msie [6|7|8|9]/i.test(navigator.userAgent)
	if(ie){
		window.location.href="browser.html"
	}

margin加倍的问题，浮动ie产生的双倍距离
	设置为float的div在ie下设置的margin会加倍。这是一个ie6都存在的bug。 解决方案是在这个div里面加上 display:inline;

DIV浮动IE文本产生3象素的bug
	margin-right:-3px; //这句是关键

```


## gt & lt

```
<!--
  gt 大于
  lt 小于
  gte 大于或等于
  lte 小于或等于
 -->
<!-- 浏览器版本小于IE等于8，显示以下代码 -->
<!-- [if lte IE8]>
  <p>
    您的浏览器版本老的可笑，请更新您的浏览器，以获得最佳体验
  </p>
<![endif]-->

!important常常被我们用来更改样式，而不是兼容hack。
IE6 不识别 !important

/* CSS hack */
IE 6-7-8
	{
	property:value\9;
	color:#f00\9;
}

IE 8
	{
	property:value\0;
	color:#f00\0;
}

IE 9-10
	{
	property:value\9\0;
	color:#f00\9\0;
}


IE 6-7
	{
	*property:value;
	*color:#f00;

	+property:value;
	+color:#f00;
}

IE 6
	{
		_property:value;
		_color:#f00;
	}
	*html .class{
		color:#f00;
	}

IE 7
	*+html .class{
	property:value;
}

all IE
	{
	property:value\9;
}


lte 小于或等于，less than or equal to

lt  小于 ，less than

gte 大于或等于 ，greater than or equal to

gt 大于 ，greater than

! 不等于 ，与js里的不等于判断符相同

() 子表达式  [if !(IE 7)]

&  and 运算符  	[if (gt IE 5) & (lt IE 7)]

| or 或运算  [if (IE 6) | (IE 7) ]

```


## 判断IE版本小于9就载入相应内容的
```
<!--[if lt IE 9]>
    <script src="/templets/lu/public/javascripts/html5.js"></script>
<![endif]-->


仅IE 9 识别
<!--[if IE 9]>
	<script src="/html5.js"></script>
<![endif]-->

仅IE 8 识别
<!--[if IE 8]>
	<script src="/html5.js"></script>
<![endif]-->

所有的IE可识别
<!--[if IE]>
	<script src="/html5.js"></script>
<![endif]-->

除IE都可以识别
<!--[if !IE]>
	<script src="/html5.js"></script>
<!--<![endif]-->


IE6以及IE6以下版本可识别
<!--[if lt IE 6]>
	<script src="/html5.js"></script>
<![endif]-->

IE6以及IE6以上版本可识别
<!--[if gte IE 6]>
	<script src="/html5.js"></script>
<![endif]-->
```
