import { api } from '@/api/index'

const user = {
  namespaced: true,
  state: {
    userInfo: {}
  },
  getters: {},
  mutations: {
    SET_USERIFON (state, payload) {
      state.userInfo = payload
    }
  },
  actions: {
    getUserInfo ({ commit }) {
      const token = localStorage.getItem('token')
      if (token) {
        api.user.info().then(res => {
          commit('SET_USERIFON', res.data)
        })
      }
    }
  }
}

export default user
