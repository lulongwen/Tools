export default {
  module: {
    loaders: [
      {
        /* style-loader css-loader
        webpack在打包过程中，遇到后缀为 .css的文件，webpack先用 css-loader加载器去解析这个文件，
        计算返回 css,使用 style-loader 生成一个解析完成的 css
        */
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        /* 对于图片小于 limit设置大小的图片，使用 base64编码，减少http请求，
        如果图片大于 limit大小，就不用 base64，直接用 url
        base64图片编码会和html混合在一起，导致可读性差，加大了html页面大小，设置 limit大小
        小图片用 base64，大图片用 url引入
        */
        test: /\.(jpg|png|jpeg|gif|svg)$/,
        loader: 'url-loader?limit=4000'
      }
    ]
  },
  
  watch: true
}