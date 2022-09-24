<template>
  <div class="detail-wrap">
    <BannerSwiper
    :banner="banner"
    layout="activeheight"
    />
  </div>
</template>

<script>
export default {
  name: 'detail-page',
  data () {
    return {
      banner: [],
      fetchProductParams: {
        page: 1,
        page_size: 1,
        id: 1
      }
    }
  },
  created () {
    // this.fetchCategory()
  },
  mounted () {
    this.fetchCategory()
  },
  activated () {
    console.log('activated 组件激活时执行')
  },
  deactivated () {
    console.log('deactivated 组件停用时执行')
  },
  watch: {
    fetchProductParams: {
      handler: 'fetchCategory',
      deep: true
    }
  },
  methods: {
    async fetchCategory () {
      const id = this.$route.params.id
      const res = await this.$api.product.detail(id)
      this.banner = res.data.images
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-wrap{
  width: 100vw;
  height: 100vh;
}
</style>
