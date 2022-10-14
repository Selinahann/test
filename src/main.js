import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from '@/api/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import autoComponents from '@/plugins/autoComponents.js'
import { InputItem } from 'mand-mobile'
import FastClick from 'fastclick'

import 'animate.css'
import '@/assets/scss/reset.css'
import '@/assets/scss/base.css'
import '@/utils/rem'
import 'swiper/dist/css/swiper.min.css'
import './assets/icon/font_3534420_782nps767vu/iconfont.css'

FastClick.attach(document.body)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(api)
Vue.use(autoComponents)

Vue.component(InputItem.name, InputItem)

new Vue({
  router,
  store,
  created () {
    if (Object.keys(this.$store.state.user.address).length < 1) {
      this.$router.replace('/geolocation')
    }
    this.$store.dispatch('user/getUserInfo')
  },
  render: h => h(App)
}).$mount('#app')
