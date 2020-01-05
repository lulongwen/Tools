# webpack plugin 插件

```jsx

    // css 文件单独打包 废弃
    extract-text-webpack-plugin

    // 抽离 css 为 link引入
    mini-css-extract-plugin

    terser-webpack-plugin 替换掉 uglifyjs-webpack-plugin
    解决 uglifyjs 不支持es6语法问题

npm i terser-webpack-plugin optimize-css-assets-webpack-plugin -D


npm i babel-loader @babel/core @babel/preset-env -D
    preset-env 转化
    core babel 核心

 @babel/plugin-proposal-class-properties 编译 class

    npm i babel-plugin-transform-decorators-legacy -D 删除了

    npm install --save-dev @babel/plugin-proposal-decorators
    装饰器模式

    @babel/plugin-transform-runtime
    https://babeljs.io/docs/en/babel-plugin-transform-runtime#docsNav


    eslint
https://www.npmjs.com/package/eslint-loader
    
```

* https://www.npmjs.com/package/mini-css-extract-plugin
