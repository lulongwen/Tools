import axios from 'axios'
import * as $ from './mutation-types'

/** 异步操作，一般用来 ajax，修改 state要提交到 mutations 里面修改
 * this.$store.dispatch('permission')
 */

export default {
  [$.PERMISSION]({commit}) {
    axios.get('/api/auth/permission').then(res => {
      commit('permission', res.data)
    })
  },

  [$.CATEGORY]({commit, state}) {
    axios.get('/api/manager/id_category/all?is_page=0').then(res => {
      commit('idType', res.data)
    })
  }
}