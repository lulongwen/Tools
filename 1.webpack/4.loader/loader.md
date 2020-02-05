# webpack loader

* loader本质就是：接收字符串(或者buffer)，再返回处理完的字符串(或者buffer)的过程。
* webpack会将加载的资源作为参数传入loader方法，交于loader处理，再返回

* loader 特点： 功能单一
* loader 用法
    * loader 字符串格式，字符串只用一个loader
    * loader 对象方式
    * 多个 loader 用数组， []
* loader的顺序
    * 默认从右向左，从下到上执行
    
    
```jsx
    require('index.css') 最后解析的 css，是用 style方式插入到 head里面的

style-loader:配合css-loader使用，以<style></style>形式在html页面中插入css代码

```



## loader 类型
* pre 前面执行的 loader
* post 后置 loader
* 内联 loader
* normal 普通 loader

expose-loader 暴露全局的 loader
    npm i expose-loader -D
    
* loader 的执行顺序
    * pre > normal > inline > post
    * loader 内部就是个数组
    
```jsx
    enforce: 'post' 在后面
    enforce: 'pre' 在前面


loader.pitch 阻断，loader内部就是一个数组
loader.pitch = function(remainingRequest) {
    // 没有返回值会一直执行
}
styleLoader.pitch = function(remainingRequest) {
    // 没有返回值会一直执行
}

// inline 行内 loader
let str = require('inline-laoder!./a.js')

-! 不会让文件再去通过 pre + normal loader来处理
-! 禁用前置 和 普通loader
let str = require('-!inline-laoder!./a.js')

! 禁用普通loader normal-loader
let str = require('!inline-laoder!./a.js')

!! 禁用前置，后置和普通 loader, 什么loader都不要，
let str = require('!!inline-laoder!./a.js')
   
```


### 引入全局的变量
1. expose-loader
2. providePlugin
3. cdn 引入不打包， externals 


## 找到 loader的方式
1. 直接写个绝对路径

```jsx
// 1
    use: path.resolve(__dirname, 'loaders', 'loader1.js')

// 2 
resolveLoader: {
// 2.2 先从 node_modules找，找不到从 loaders文件夹下找
    modules: [ 
      'node_modules',
      path.resolve(__dirname, 'loaders')
    ],
    // 2.1 别名
    alias: {
      loader1: path.resolve(__dirname, 'loaders', 'loader1.js')
    }
  },
```


## 配置多个loader
* 注意 loader 执行顺序，从右到左，从下到上

```jsx
// use String 字符串
    use: 'css-loader'


// use Array 数组
    use: ['style-loader', 'css-loader']

// use Object 对象
    use: {
        loader: 'css-loader',
    }
```


## loader 实现步骤

```jsx
    ["version", "emitWarning", "emitError", "getLogger", "exec", "resolve", "getResolve", "emitFile", "rootContext", "webpack", "sourceMap", "mode", "_module", "_compilation", "_compiler", "fs", "target", "loadModule", "context", "loaderIndex", "loaders", "resourcePath", "resourceQuery", "async", "callback", "cacheable", "addDependency", "dependency", "addContextDependency", "getDependencies", "getContextDependencies", "clearDependencies", "resource", "request", "remainingRequest", "currentRequest", "previousRequest", "query", "data"]
```



## 实现 babel-loader



## 实现 banner-loader



## 实现 file-loader
* 目的就是根据图片生成一个 md5 ，emit 发射到dist目录下
* file-loader 还会返回当前的图片路径

```jsx
{
    test: /\.jpg$/,
    use: {
      loader: 'file-loader'
    },
  }
```


## 实现 css-loader

























