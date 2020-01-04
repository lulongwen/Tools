# Yarn 
* yarn 是新一代的包管理工具
* mac homebrew 安装
```bash

	brew install yarn

	yarn --version # 查看版本

```


## yarn 创建一个项目 ` package.json `
```bash
	
	yarn init 
	yarn init -y
	yarn init --yes

	yarn # 初始化项目
	yarn install 

	yarn start # 启动项目

	yarn run build # 打包项目

```


## yarn 添加项目依赖

```bash

	yarn add jquery # 安装包，默认 --save
	yarn add jquery --save # 安装项目依赖
	yarn add jquery --dev # 安装开发依赖
	yarn add jquery global # 全局安装 jquery

	# --save dependencies   ，缩写 -S
	# --dev  devDependencies，缩写 -D

	yarn upgrade # 升级全部
	yarn upgrade jquery # 升级 jquery
	yarn upgrade --latest # 升级到最新版本

	yarn remove jquery # 卸载包

	yarn info jquery # 查看模块的版本信息

	yarn list # 列出当前项目的依赖

	yarn cache # 列出缓存的包

```


## yarn 版本信息
```jsx
	
"dependencies": {
  "react": "16.8.9",
}
	主版本
	次版本好
	修订号

```


## 为什么使用 yarn
* 速度快
* 安装版本统一，更安全
* 更简洁的输出
* 更好的语义化