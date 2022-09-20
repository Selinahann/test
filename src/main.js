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

Vue.use(VueAwesomeSwiper)
Vue.use(api)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
