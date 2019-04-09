//调用mock方法模拟数据
Mock.mock(
  'http://mockjs', {
    "userName": '@name',// 模拟名称
    "age|1-100": 100, // 模拟年龄(1-100)
    "color": "@color", // 模拟色值
    "date": "@date('yyyy-MM-dd')", // 模拟时间
    "url": "@url()",// 模拟url
    "content": "@cparagraph()", // 模拟文本
    'list|1-10': [{'id|+2': 1, 'age|20-30': 100}],
    'email': '@email',
    'friends|3': [{name: '@name'}],
    'price|10-20.2-5': 11,
    'cost|10-20.3': 11,
    'test|3.2-5': 52,
    'yourname|2-4': 'alice-',
    'title': '@title',
    // 链接
    'url': '@url("http")',
    // 邮箱
    'email': '@email',
    // 时间
    'date': '@date("yyyy-MM-dd HH:mm:ss")',
    'date2': '@dateTime',
    // 汉字
    'ctitle': '@ctitle(8)',
    // 汉字姓名
    'canme': '@cname()',
    // 地址
    'cadd': '@province' + '@city' + '@county',
    // 手机号
    'phone': /^1[385][1-9]\d{8}/
  }
);

// jQuery ajax 请求
$.ajax({
  url: "http://mockjs",// 请求的url地址
  dataType: "json", // 返回格式为json
  async: true, // 请求是否异步，默认为异步，这也是ajax重要特性
  data: {}, // 参数值
  type: "GET", // 请求方式
  beforeSend: function () {
    //请求前的处理
  },
  success: function (req) {
    //请求成功时处理
    console.log("打印数据", req);
  },
  complete: function () {
    //请求完成的处理
  },
  error: function () {
    //请求出错处理
  }
});