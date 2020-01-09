
// inline 行内 loader
var str = require('inline-laoder!./a.js')

// -! 不会让文件再去通过 pre + normal loader来处理
var str = require('-!inline-laoder!./a.js')

// ! 没有 normal
var str = require('!inline-laoder!./a.js')

// !! 什么都不要
var str = require('!!inline-laoder!./a.js')


// console
console.log('webpack-loader')
