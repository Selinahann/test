import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import about from './about'
import location from './location'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    about,
    location
  }
})
