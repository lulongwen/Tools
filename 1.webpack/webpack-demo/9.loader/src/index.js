// file-loader
import src from './code.jpg'
let img = document.createElement('img')
img.src= src

document.body.appendChild(img)


// console
console.log('webpack-loader')


// babel-loader
var info = () => {
  console.log('this is info')
}
info()


// less-loader css-loader
import './index.less';



var arr = []
for(let i =0; i< 10; i++) {
  arr.push(finish => {
    console.log(i, finish)
    return function () {
      finish()
    }
  })
}

var finish = arr.reduce((prev, next) => {
  return next(prev)
})
finish()
