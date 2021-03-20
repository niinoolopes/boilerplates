import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import moduleA from './moduleA'
import moduleB from './moduleB'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    moduleA: moduleA,
    moduleB: moduleB,
  }
})
