
// 报错
// import './css/index.css'
// require('./css/index.css')

import './css/style.less'

// require('!style-loader!css-loader!./css/index.css')

// import styles from './css/index.css'
// styles.use()


// 打包图片
let image = new Image()
// 图片就是一个普通的字符串，报错
// image.src = './logo.png'
// document.body.appendChild(image)

// 哈希戳的图片格式 05f960c02d8a7ff961209c52ac7abda8.png
import logo from './logo.png'
let logo2 = require('./logo.png')
console.log('logo', logo, logo2.default)
image.src = logo
document.body.appendChild(image)

console.log("hello longwende pack");
