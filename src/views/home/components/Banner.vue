<template>
  <div class="banner-wrap">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide
      v-for="(item, index) in banner"
      :key="index"
      >
        <img :src="item.url" alt="">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'banner-swiper',
  props: {
    banner: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
      }
    }
  },
  created () {
    // this.$axios.get('/api/home').then((res) => {
    //   const banner = res.data.data.banner
    //   this.banner = banner
    // }).catch((e) => {
    //   console.log(e)
    // })
  }
}
</script>

<style lang="scss" scoped>
.banner-wrap{
  @include wh(100%, auto);
  img{
    @include wh(100%, 2.4rem);
  }
  ::v-deep .swiper-pagination{
    .swiper-pagination-bullet{
      @include wh(14px, 14px);
      display: inline-block;
      margin-right: 8px;
      &.swiper-pagination-bullet-active{
        background-color: $color-primary;
      }
    }
  }
}
</style>
