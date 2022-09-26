import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from '@/api/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import '@/assets/scss/reset.css'
import '@/assets/scss/base.css'
import '@/utils/rem'
import 'swiper/dist/css/swiper.min.css'
import './assets/icon/font_3534420_782nps767vu/iconfont.css'

import ProductList from '@/components/ProductList/index.vue'
import TabChange from '@/components/Tabs/index.vue'
import BannerSwiper from '@/components/BannerSwiper/index.vue'
import SearchBar from '@/components/SearchBar/index.vue'

Vue.use(VueAwesomeSwiper)
Vue.use(api)
Vue.config.productionTip = false

Vue.component('ProductList', ProductList)
Vue.component('TabChange', TabChange)
Vue.component('BannerSwiper', BannerSwiper)
Vue.component('SearchBar', SearchBar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
