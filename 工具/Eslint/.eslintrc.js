module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: "standard",
  // required to lint *.vue files
  plugins: [
    "html"
  ],
  // add your custom rules here
  "rules": {
    "no-new": "off",
    // allow paren-less arrow functions
    "arrow-parens": 0,
    // allow async-await
    "generator-star-spacing": 0,
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    "no-tabs": 0,
    "space-before-function-paren": 0

    /* eslint-disable no-unused-vars ES6规范会让声明但未被调用的变量报错，所以加上这句 */
  }
}
