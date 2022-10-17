import { api } from '@/api/index'

const about = {
  namespaced: true,
  state: {
    cartList: []
  },
  getters: {
    count (state) {
      return state.cartList.reduce((prev, item) => {
        return prev + item.num
      }, 0)
    }
  },
  mutations: {
    SET_CARTLIST (state, payload) {
      state.cartList = payload
    }
  },
  actions: {
    getCartList ({ commit }) {
      api.cart.list().then((res) => {
        commit('SET_CARTLIST', res.data)
      })
    }
  }
}

export default about
