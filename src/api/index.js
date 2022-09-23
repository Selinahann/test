import axios from '@/utils/axios'

const api = {
  home: {
    base: () => axios.get('/home')
  },
  product: {
    list: (params) => axios.get('/home/product', params),
    detail: id => axios.get(`/home/detail/${id}`)
  },
  category: {
    tree: () => axios.get('/home/category')
  }
}

export default (Vue) => {
  Vue.prototype.$api = api
}
