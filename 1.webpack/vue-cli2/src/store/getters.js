
import { storage } from '@/lib/storage'
import * as $ from './mutation-types'
/**
 * getters 相当于 computed， state 的 computed 公有的
 */

const user = storage.get('user')

export default {
  user(state) {
    return state.user || user
  },
  projectType(state) {
    let type = state.projectType
    if (!type.length) return []

    let arr = type.map(item => {
      let {id, pid, level, name} = item
      return {id, pid, level, value: id, label: name}
    })

    return arr
  }
}