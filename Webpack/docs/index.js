/**
 * ES Moudule 模块引入方式
 * 浏览器不认识模块化，无法解析代码
 * 	webpack可以把代码转化为 浏览器可以识别的
 */
import Header from './header.js'
import Sidebar from './sidebar.js'
import Content from './content.js'

new Header()
new Sidebar()
new Content()