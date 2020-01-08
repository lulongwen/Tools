import $ from 'jquery'
import moment from 'moment'
// 手动引入所需要的语言
import 'moment/locale/zh-cn'

console.log('$', $)

let time = moment().endOf('day').formNow()
console.log('time', time)
