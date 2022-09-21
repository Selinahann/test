import axios from '@/utils/axios'

const api = {
  home: {
    base: () => axios.get('/home')
  },
  product: {
    list: (params) => axios.get('/home/product', params)
  },
  category: {
    tree: () => axios.get('/home/category')
  }
}

export default (Vue) => {
  Vue.prototype.$api = api
}
