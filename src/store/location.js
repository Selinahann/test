import storage from '@/utils/storage'

const location = {
  namespaced: true,
  state: {
    address: {}
  },
  getters: {},
  mutations: {
    SET_LOCATION (state, payload) {
      state.address = payload
      storage.setItem('location', payload, 3000 * 60 * 60 * 3)
    }
  },
  actions: {}
}

export default location
