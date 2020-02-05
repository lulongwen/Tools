import { storage } from '@/lib/storage'
import * as $ from './mutation-types'
/**
  mutations 不支持异步，不能ajax，同步的 【 数据管理员 】
  mutations 对象里面都是操作 state 的 方法，相当于 methods
 */

export default {
  permission(state, data) {
    state.permission = data
  },

  idType(state, data) {
    state.idType = data
  }
}