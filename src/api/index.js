import axios from '@/utils/axios'

export const api = {
  home: {
    base: () => axios.get('/home')
  },
  product: {
    list: (params) => axios.get('/home/product', params),
    detail: id => axios.get(`/home/detail/${id}`),
    tree: () => axios.get('/home/category'),
    keyword: (params) => axios.get('/home/search', params)
  },
  user: {
    sendCode: (params) => axios.get('/user/sendMessageCode', params),
    login: (params) => axios.post('/user/login', params),
    info: () => axios.get('/user/info')
  },
  address: {
    create: (params) => axios.post('/user/address', params),
    list: () => axios.get('/user/address'),
    update: (id, params) => axios.put('/user/address/' + id, params)
  },
  cart: {
    add: (params) => axios.post('/user/cart', params),
    list: () => axios.get('/user/cart'),
    update: (id, params) => axios.put('/user/cart/' + id, params),
    updateAll: (params) => axios.put('/user/cart', params),
    delete: (id) => axios.delete('/user/cart/' + id)
  }
}

export default (Vue) => {
  Vue.prototype.$api = api
}
