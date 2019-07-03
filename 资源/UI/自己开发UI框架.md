# 自己开发 UI框架
1. 基础知识
  * 页面结构
  * CSS选择器
  * 页面渲染机制
  * CSS屏幕适配方案
  * CSS规范
  * 把具有共性的东西抽离出来，变成通用的组件

2. 移动端页面布局
  * 移动端页面布局
  * 字体图标
  * Layout
  * 布局组件
  * 按钮样式

3. PC端页面布局
  * 首页
  * 列表页
  * 文章页
  * 菜单页
  * 搜索结果提示页

4. 常用的组件
  * Search 搜索框样式
  * List 列表样式
  * Grid 网格样式
  * Table 表格样式
  * Menu 菜单样式
  * Modal 模态框样式
  * Loading 加载提示样式
  * Toast 提示样式
  * ActionSheet 可选菜单样式
  * Articel 文本样式

5. UI框架的集成
  * Bootstrap 流行的PC端框架
  * Foundation 扁平化风格的UI框架
  * IviewUI Vue前端组件库
  * Ant Design

6. 移动端框架
  * Mand Mobile 2 面向金融场景的 Vue组件库，快速搭建优质的金融类产品
    * https://didi.github.io/mand-mobile/#/zh-CN/home
  
  * NutUI 京东风格的轻量级移动端Vue组件库
    * http://nutui.jd.com/#/index

  * WeUI 微信原生视觉体验一致的基础样式库，纯 CSS组件，没有JS
    * https://weui.io
 


## 使用 UI框架
* 在使用 UI框架的时候，要考虑到框架要升级，一般要求：不要改动框架的源码；
* 尤其是以 npm 方式安装的框架或插件，源码更是不能动的，因为这个涉及到自动化部署。
* 如果是自建框架的话，是可以修改控制框架内部代码的，这种方式称之为 侵入式开发。