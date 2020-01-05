

## 安装 style-loader css-loader postcss-loader
```
    npm i style-loader css-loader postcss-loader autoprefixer -D
```



## style-loader css-loader
- webpack 提供2个loader 处理样式表 css-loader & style-loader
- css-loader 能够让你使用 @import() 和 url() 的方法实现 require() 的功能
- style-loader 是将所有计算后的样式加入到页面中
    + style-css-loader组合能够把样式表嵌入到 webpack打包后的 JS文件中


### postcss-loader
- postcss-loader 给浏览器添加前缀


### babel-loader
- babel其实是几个模块化的包，核心功能是 babel-core
- webpack整合了，对于每一个你需要的功能或是拓展，都需要安装单独的包
- 用的最多的是解析ES6的 babel-presets-es2015 和
- babel-preset-react
- 安装babel
```
npm i babel-core babel-loader babel-presets-es2015 babel-preset-react

安装 react
    npm i react react-dom -S
```



### 配置 style-loader css-loader
```
    ! 感叹号的作用就是让同一个文件能够使用不同类型的 loader

module.exports = {

    module:{ // 使用的模块
        loaders:[ // 使用的loader
            {    
                test: /\.css$/, //以.css结尾的
                // loader 从右向左执行，所以要先写 style-loader
                loader: 'style-loader!css-loader!postcss-loader'
            },
            {
                test: /\.js$/, //以.js结尾的
                loader: 'babel-loader',
                exclude: /node_modules/, //排除 mode_modules
                query:{
                   presets:['es2015', 'react']
            } 
        ]
    },
    postcss:[
        require('autoprefixer') // 调用 autoprefixer 插件
    ],
    resolve:{ // 可以省略的后缀名
        "extensions": ['.js', '.css', '.json', '.jsx']
    }
}
```


### loader 配置项
- loaders
- 需要单独安装并需要在 webpack.config.js下的 modules下进行配置
- loaders的配置项包括：
```
test 必须
    一个匹配 laoders所处理的文件扩展名的正则表达式

loader 必须
     loader的名称

include/exclude 可选
    添加/屏蔽 必须处理的文件或文件夹

query 可选
    为 loaders 提供额外的设置选项
```

## file-loader
```
    file-loader 处理 图片文件
    模板中的路径地址，要用绝对地址
        src="${ require('../src/2.png') }" 

    图片请求次数多了，就用src引入，可以产生缓存，
    base64没有图片缓存，导致代码冗余，文件体积变大
        url-loader
    limit: 2000 小于 2000会被转换为 base64格式

```