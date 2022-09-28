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
  }
}

export default (Vue) => {
  Vue.prototype.$api = api
}
