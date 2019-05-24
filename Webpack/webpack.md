# Webpack4
* Tree shaking
* 懒加载
* 代码分割

* webpack4 的优点
	* webpack 成为前端工程师必备的技能
	* 速度更快，大型项目节约 90%的构建时间
	* 内置了更多默认配置，更新了很多 API



## webapck的配置文件
* webapck的安装
* webpack打包输出的内容


## webapck 核心概念



## webpack 进阶



## webpack实战配置



## webpack 底层原理



## 脚手架工具分析
* react create app
* vue cli





```
webapck JS的翻译器
	bundler 模块打包工具

用 webpack翻译 index.js
npx webapck index.js

```



## 
## 1 为什么需要构建工具
1. 开发分工的变化
2. 开发语言和框架的变化
3. 开发环境和开发工具的变化
4. 社区的变化
5. webpack 的优势
	1. 模块化
	2. 优化加载速度
	3. 使用新的开发模式
	4. 打包工具的目的
		+ 减少下载资源和HTTP请求
		+ 合并压缩css js html，减少文件体积

### 安装webpack
	```
	全局安装 webpack， 验证 webpack安装 webpack --version
		npm install webpack -g
	
	项目安装
		npm i webpack --save-dev

	创建 package.json
		工程文件，需要依赖的模块，库描述，版本，作者，git地址
		npm init
		npm init -y 直接生成 package.json

	项目根目录创建 ` webpack.config.js `
		touch webpack.config.js

	webpack中文官网 https://doc.webpack-china.org

	webpack支持的模块化
		ES modules 推荐的用法
		AMD
		commonJS

	webpack功能
	V1
		编译，打包
		HMR 模块热更新
		代码分割
		文件处理

	V2
		Tree shaking
		ES module
		动态 import
		新的使用文档
	```



## package.json配置
```
// 找到 scripts
"scripts": {
    // 指定配置文件 打包进度 显示打包模块 字体颜色 打包原因
    "webpack": "webpack --config webpack.config.js --progress 
                --display-modules --colors --display-reasons"
}

    // 使用命令
    npm run webpack


    // 可以把 babel 写在 package.json里面
    "babel": {
        "presets": ['es2015']
    }
```



## loader
```
npm i html-webpack-plugin -D 自动化生成项目中的html页面
npm install css-loader style-loader --save-dev
npm install vue vue-loader vue-html-loader vue-style-loader -D

npm i webpack-dev-server -g
	webpack-dev-server --inline --hot
	webpack-dev-server --port 8088 端口号
	webpack-dev-sercer --inline  自动
	webpack-dev-server --hot 热重载，局部更改

npm i css-loader style-loader -D
npm i postcss-loader autoprefixer -D
	{
		test: /\.css$/,
		loader: 'style-loader!css-loader!postcss-loader'
	}

// 编译 ES6
npm i webpack webpack-dev-server babel-loader babel-core babel-presets-es2015 -D

// React
npm i webpack webpack-dev-server babel-loader babel-core babel-presets-es2015 react-hot-loader babel-preset-react -D  --save-dev

// .bablerc
	根目录
	{
		"presets": ["es2015"]
	}

	把 babel 写在 package.json里面
	"babel": {
		"presets": ['es2015']
  }
```


## webpack plugins
- 插件是用来扩展 webpack功能的，会在整个构建过程中生效，执行相关的任务
- loaders是在打包构建过程中用来处理源文件的(js jsx scss es2016)，一次处理一个
- 插件并不直接操作单个文件，直接对整个构建过程起作用
- 用到某个插件，可以用 npm 来安装，然后再 webpack配置中 plugins关键字部分添加该插件的一个实例
	+ plugins是一个数组
	+ 安装插件后，要在 配置文件最开始调用插件，例如
	```
	let webpack = require('webpack');
	然后再 modules.exports= {} 里面添加一个 plugins的关键字

	plugins:[
			//再做个数组中 new一个就可以了，这个插件是webpack自带的，不需要安装
			new webpack.BannerPlugins('logo')
	]
	```


## require 语法
```

引入文件必须是 ./ 开头的，没有 ./ 开头，node会认为是一个模块包
	.js 可以不写 .js，默认加载 js文件，require 可以加载其他类型的资源
	require('./world.js')
	require('style-loader!css-loader!./style.css')
```


## webpack CLI
- 随着开发的增加，必须要划分很多文件，文件多了之后，文件之间的依赖就需要额外处理
- webpack前身 browserify，缺点webpack只能处理js模块
- 如果我们想处理其他的类型，比如css，图片等，我们需要通过loader去实现其他模块的加载
- 模块加载器是 webpack的核心
	+ webpack是一个模块加载器和文件打包工具，支持 CommonJS 和 AMD模块
		* webpack 可以直接使用 require 
	+ 一切都可以打包，可以把各种资源，例如 js jsx coffee 样式 sass 图片 等作为模块来使用和处理
	+ 一切都是模块化(js, css, images等)，可以把各个模块进行加载，预处理，然后打包，因此 webpack里面 js可以引用css
	```
	webpack	开发环境下编译(打包)
	webpack -p	生产环境下编译(压缩)
	webpack -w	监听文件改动,自动编译(速度快)
	webpack -d       开启(生成)source maps	(用来调试)

	webpack -wdp

	如果不用webpack.config.js,自己定义名字 config.js
	运行:  webpack --config config.js


	webpack-dev-server --port 8088	端口号
	webpack-dev-server --inline	改变完代码以后，自动刷新浏览器
	webpack-dev-server --hot	热重载(局部更改)
	webpack-dev-server --port 8088 --inline --hot

	  webpack [入口文件] [输出文件]
      webpack index.js bunld.js

  webpack -p    上线打包压缩
  webpack -w    监听文件改动
  webpack -d    生成 source.map文件
  webpack -wdp  多个命令组合，监听文件，生成source.map，上线打包压缩

  webpack --config config.js

// 指定 webpack文件
webpack --config webpack.dev.config.js

// 命令行 --module-bind 绑定 loader， 绑定 css-loader，单引号报错，要用双引号
webpack index.js bundle.js --module-bind "css=style-loader!css-loader"

// 绑定 loader --watch监听
webpack index.js bundle.js --module-bind "css=style-loader!csss-loader" --watch

// 绑定 loader --progress打包进度
webpack index.js bundle.js --module-bind "css=style-loader!css-loader" --progress

// 绑定 loader，--progress --display-modules 显示打包进度 显示模块
webpack index.js bundle.js --module-bind "css=style-loader!css-loade" --progress --display-modules 

// 绑定 loader， --display-modules --display-reasons 显示模块 显示打包的原因
webpack index.js bundle.js --module-bind "css=style-loader!css-loade" --progress --display-modules --display-reasons
	```


## 2 webpack 开发环境搭建
1. 配置 sourcemap调试
2. 动态 entry更新
3. 配置模块热加载
4. 配置 ESlint代码检查规范
5. 配置远程接口代理



## 3 webpack文件处理
1. 编译 ES6
2. 编译 Less/Sass
3. 编译 TypeScript
4. PostCSS处理浏览器前缀
5. CSS nano压缩 CSS
6. 自动生成 HTML模板文件
7. 图片压缩和 Base64编码
8. 自动生成 css精灵图



## 4 webapck打包优化
1. 代码分割和懒加载
2. 提取公共代码
3. tree-shaking
4. 长缓存配置



## webpack和框架的配合
1. vue-cli
2. react
3. angular-cli



## webpack总结
1. 实时编译
2. 开发服务
3. 自动优化网页，对网页的优化，融在了工具中，自动做到

## webpack面试
- 概念
- 配置
- 开发
- 优化

### webpack概念
1. 什么是 webpack？和 gulp有什么不同
	```
	webpack是一个模块打包器，可以递归的打包项目中的所有模块，
	最终生成几个打包后的文件，webpack和gulp最大的不同在于支持
	code-splitting 分割代码, 模块化(AMD,ESM, CommonJS), 全局分析
	```

2. 什么是 bundle, chunk, module?
	```
	bundle是 webpack打包出来的文件，
	chunk是 指webpack在进行模块依赖分析的时候，代码分割出来的代码块，
	module是开发中的单个模块
	```

3. 什么是 loader, plugin?
	```
	loaders 是用来告诉 webpack如何转化处理某一类型的文件，并且引入到打包出的文件中
	plugins 是用来自定义 webpack打包过程的方式，一个插件时含有 apply方法的一个对象，
	通过这个方法可以参与到整个 webpack打包的各个流程(生命周期)。
	```

### webpack 配置问题
1. 如何自动生成 webpack配置
	```
	webpack-cli, vue-cli, 等脚手架工具
	```

### webpack开发问题
1. webpack-dev-server 和 http服务器，如 nginx有什么区别？
	```
	webpack-dev-server 使用内存在存储webpack开发环境下的打包文件，
	并且可以使用模块热更新，
	webpack比传统的服务队开发更加简单高效。
	```

2. 什么是模块热更新？
	```
	模块热更新是webpack的个功能，可以让代码修改过后不同刷新浏览器就可以更新页面，是高级版的自动刷新浏览器。
	```

### webpack优化问题
1. 什么是长缓存，在webpack中如何做到长缓存？
	```
	浏览器在用户访问页面的时候，为了加快加载速度，会对用户访问的静态资源进行存储，
	但是每一次代码升级或是更新，都需要浏览器去下载新代码，最方便和简单的更新方式就是引入新的文件名称。
	在webpack中可以在 output给输出的文件指定 chunkhash，
	并且分离经常更新的代码和框架代码，
	通过 NamedModulesPlugin & HashdModuleIdsPlugin 让再次打包文件名不变。
	```
2. 什么是 Tree-shaking? CSS 可以 Tree-shaking吗？
	```
	Tree-shaking 是指在打包中去除那些引入了，但是在代码中没有用到的那些无用代码。
	webpack中 Tree-shaing是通过 uglifyJSPlugin 来 Tree-shaking
	CSS 可以Tree-shaking，需要使用 Purify-CSS
	```



### webpack工程化思想
1. 一切皆为模块
2. 极速的调试响应速度
3. 优化应该自动完成，优化的应该交给机器自动完成

### webpack未来
1. 零配置
2. 更快，更小
3. Breaking Change

### 从webpack中学到了什么
1. webpack 的使用
2. 现代前端的正确开发姿势，工作流
3. 前端优化的思想
	- 代码分割
	- tree shaking