<template>
  <div class="banner-wrap" :class="{[layout] : true}">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide
      v-for="(item, index) in banner"
      :key="index"
      >
        <img :src="item.url ? item.url : item" alt="">
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
    banner: Array,
    layout: {
      type: String,
      default: 'height'
    }
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
  &.activeheight{
    img{
      @include wh(100%, 490px);
    }
  }
}
</style>
