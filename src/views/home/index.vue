<template>
  <div class="home-wrap">
    <HeaderBar />
    <Banner :banner="banner"/>
    <MallBanner :mall="mall"/>
    <HotZone />
    <div class="product-wrap" ref="content">
      <TabChange
      :tab="tab"
      @change="navChange"
      />
      <ProductList :product="product"/>
    </div>
  </div>
</template>

<script>
// import jsonp from '@/utils/jsonp'
import HeaderBar from './components/HeaderBar.vue'
import Banner from './components/Banner.vue'
import MallBanner from './components/MallBanner.vue'
import HotZone from './components/HotSale.vue'
import scroll from '@/mixins/scroll'
export default {
  name: 'home-tab',
  mixins: [scroll],
  components: {
    HeaderBar,
    Banner,
    MallBanner,
    HotZone
  },
  data () {
    return {
      banner: [],
      mall: [],
      tab: [],
      product: [],
      fetchProductParams: {
        page: 1,
        page_size: 10,
        class_id: 1
      },
      num: 0
    }
  },
  watch: {
    fetchProductParams: {
      handler: 'fetchProductList',
      deep: true,
      immediate: true
    }
  },
  created () {
    // jsonp('http://localhost:7001/api/home').then((res) => {
    //   console.log(res)
    // }).catch((e) => {
    //   console.log(e)
    // })
    this.initHomeData()
    // this.fetchProductList()
  },
  // mounted () {
  //   window.addEventListener('scroll', this.scroll, false)
  // },
  // destroyed () {
  //   window.addEventListener('scroll', this.scroll, false)
  // },
  scrollBottom () {
    this.fetchProductParams.page += 1
  },
  methods: {
    // scroll () {
    //   const windowHeight = window.innerHeight
    //   const pageHeight = document.body.scrollHeight
    //   const scrollTop = document.querySelector('html').scrollTop
    //   // console.log(pageHeight - scrollTop, windowHeight + 10)
    //   if (pageHeight - scrollTop < windowHeight + 10) {
    //     this.fetchProductParams.page += 1
    //   }
    // },
    initHomeData () {
      this.$api.home.base().then(res => {
        this.banner = res.data.data.banner
        this.mall = res.data.data.nav_test
        this.tab = res.data.data.hot_banner
      })
    },
    async fetchProductList () {
      const res = await this.$api.product.list(this.fetchProductParams)
      if (this.fetchProductParams.page === 1) {
        this.product = res.data.data
      } else {
        this.product = this.product.concat(res.data.data)
      }
    },
    navChange (item) {
      this.fetchProductParams.class_id = item.id
      this.fetchProductParams.page = 1
      const top = this.$refs.content.offsetTop
      const scrollTop = document.querySelector('html').scrollTop
      if (scrollTop > top) {
        window.scrollTo(0, top)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home-wrap{
  .product-wrap{
    position: relative;
  }
}
</style>
