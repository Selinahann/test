import { api } from '@/api/index'
import storage from '@/utils/storage'

const user = {
  namespaced: true,
  state: {
    userInfo: {},
    address: storage.getItem('address') || {},
    userAddress: []
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
    },
    SET_USERADDRESS (state, payload) {
      state.userAddress = payload
    }
  },
  actions: {
    getUserInfo ({ commit, dispatch }) {
      const token = localStorage.getItem('token')
      if (token) {
        api.user.info().then(res => {
          dispatch('getUserAddress')
          dispatch('cart/getCartList', null, { root: true })
          commit('SET_USERIFON', res.data)
        })
      }
    },
    getUserAddress ({ commit }) {
      api.address.list().then((res) => {
        commit('SET_USERADDRESS', res.data)
      })
    }
  }
}

export default user
