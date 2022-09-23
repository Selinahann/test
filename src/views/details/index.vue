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
    console.log(this.$route.params.id)
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
      console.log(res.data.images)
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
