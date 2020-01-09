;(function(modules) {
  // webpackBootstrap
  // The module cache 1 先定义一个缓存
  var installedModules = {}

  // The require function 2 配置实现 require 方法
  function __webpack_require__(moduleId) {
    // Check if module is in cache 检查模块是否在缓存中
    if (installedModules[moduleId]) {
      // 不在缓存中
      return installedModules[moduleId].exports
    }
    // Create a new module (and put it into the cache) 安装一个模块
    var module = (installedModules[moduleId] = {
      i: moduleId, // 模块 id
      l: false, // 加载是否完成
      exports: {}
    })

    // Execute the module function
    modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    )

    // Flag the module as loaded
    module.l = true

    // Return the exports of the module
    return module.exports
  }

  // expose the modules object (__webpack_modules__)
  __webpack_require__.m = modules

  // expose the module cache
  __webpack_require__.c = installedModules

  // define getter function for harmony exports
  __webpack_require__.d = function(exports, name, getter) {
    if (!__webpack_require__.o(exports, name)) {
      Object.defineProperty(exports, name, { enumerable: true, get: getter })
    }
  }

  // define __esModule on exports
  __webpack_require__.r = function(exports) {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" })
    }
    Object.defineProperty(exports, "__esModule", { value: true })
  }

  // create a fake namespace object
  // mode & 1: value is a module id, require it
  // mode & 2: merge all properties of value into the ns
  // mode & 4: return value when already ns object
  // mode & 8|1: behave like require
  __webpack_require__.t = function(value, mode) {
    if (mode & 1) value = __webpack_require__(value)
    if (mode & 8) return value
    if (mode & 4 && typeof value === "object" && value && value.__esModule)
      return value
    var ns = Object.create(null)
    __webpack_require__.r(ns)
    Object.defineProperty(ns, "default", { enumerable: true, value: value })
    if (mode & 2 && typeof value != "string")
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key]
          }.bind(null, key)
        )
    return ns
  }

  // getDefaultExport function for compatibility with non-harmony modules
  __webpack_require__.n = function(module) {
    var getter =
      module && module.__esModule
        ? function getDefault() {
            return module["default"]
          }
        : function getModuleExports() {
            return module
          }
    __webpack_require__.d(getter, "a", getter)
    return getter
  }

  // Object.prototype.hasOwnProperty.call
  __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property)
  }

  // __webpack_public_path__
  __webpack_require__.p = ""

  // Load entry module and return exports
  return __webpack_require__((__webpack_require__.s = "./src/index.js"))
})(
  // 匿名函数
  {
    // key -> 当前模块的路径
    "./src/index.js":
      // value -> 就是一个函数
      function(module, exports) {
        eval(
          'console.log("hello longwende pack");\r\n\n\n//# sourceURL=webpack:///./src/index.js?'
        )
      }
  }
)
