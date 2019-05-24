# Node Package Modules

## 查看全局安装包
  ```
  npm list -g --depth 0
    -g 全局安装包
    list安装的 node包
    -depth 0

  - npm update 更新 dependencies的安装包

	- npm install 包名称
	- npm install 包名称 --save
	- npm install 包名称 --save-dev
	- npm install 包名称 -g

  --save 项目依赖，项目运行要用到的
    安装包保存到 dependencies

  --save-dev 项目开发依赖，项目开发过程中用到的，项目运行不需要
    安装包保存到 devDependencies
    
  -g 全局安装

  npm uninstall <package>：从node_modules目录中移除一个包
  ```
   
## npm模块
- 本地存储 `npm install store -S`


## 如何发布一个 npm
- 注册账号
  1. 官网注册账号
  2. cmd下登录账号 npm login
  3. 发布 npm publish

- 创建自己的组件
  1. 初始化项目
  2. 修改 package.json
    ```
    "private": false,
    "main": "dist/vue-count.min.js"
    ```
  3. 修改 `webpack.prod.config.js`
    + 修改 out输入目录
    + 删除无用内容
  4. 修改输出
    + 修改 main.js 输出自己的组件即可使用

