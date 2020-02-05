# 开发中常用的 loader

```bash
    npm i style-loader css-loader postcss-loader autoprefixer -D
```

* postcss-loader 给浏览器添加前缀


## url-loader & file-loader 处理图片文件
* url-loader 包含 file-loader
    * 图片请求次数多了，就用src引入，可以产生缓存
    * base64 图片，没有缓存，导致代码冗余，文件体积变大
    * `limit: 20 * 1024` 小于 2000kb 会被转换为 base64格式



## loader config

* ! 感叹号的作用: 让同一个文件能够使用不同类型的 loader
* test 必须， 匹配 laoders 所处理的文件扩展名的正则表达式
* loader 必须，loader的名称

* exclude 可选，排除的文件夹
* include 可选，包含的目录
```jsx
{
    test: /\.less/i,
    loader: '',
    include: /src/,
    exclude: /node_modules/
}
```


### webpack loader 的配置

```jsx
module.exports = {
    module:{
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
