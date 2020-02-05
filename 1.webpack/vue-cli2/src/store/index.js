import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
	modules: {
		user
	},
	// strict: process.env.NODE_ENV !== 'production'
})