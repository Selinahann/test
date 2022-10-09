import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from '@/api/index'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'animate.css'
import '@/assets/scss/reset.css'
import '@/assets/scss/base.css'
import '@/utils/rem'
import 'swiper/dist/css/swiper.min.css'
import './assets/icon/font_3534420_782nps767vu/iconfont.css'

import ProductList from '@/components/ProductList/index.vue'
import TabChange from '@/components/Tabs/index.vue'
import BannerSwiper from '@/components/BannerSwiper/index.vue'
import SearchBar from '@/components/SearchBar/index.vue'
import PopUp from '@/components/PopUp/index.vue'
import LoadingAnimation from '@/components/Loading/index.vue'
import Loading from './components/Loading/index.js'

Vue.use(VueAwesomeSwiper)
Vue.use(api)
Vue.use(Loading)
Vue.config.productionTip = false

Vue.component('ProductList', ProductList)
Vue.component('TabChange', TabChange)
Vue.component('BannerSwiper', BannerSwiper)
Vue.component('SearchBar', SearchBar)
Vue.component('PopUp', PopUp)
Vue.component('LoadingAnimation', LoadingAnimation)

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
