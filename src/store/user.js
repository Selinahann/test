import { api } from '@/api/index'
import storage from '@/utils/storage'

const user = {
  namespaced: true,
  state: {
    userInfo: {},
    address: storage.getItem('address') || {}
  },
  getters: {},
  mutations: {
    SET_USERIFON (state, payload) {
      state.userInfo = payload
      storage.setItem('userInfo', payload, 3000 * 60 * 60 * 3)
    },
    SET_ADDRESS (state, payload) {
      state.address = payload
      storage.setItem('address', payload, 3000 * 60 * 60 * 3)
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
