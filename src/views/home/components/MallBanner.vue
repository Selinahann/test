<template>
  <div class="mall-wrap">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide
      v-for="(item, index) in Math.ceil(mall.length / 10)"
      :key="index"
      >
        <ul>
          <li
          v-for="(subitem, subindex) in mall.slice(index * 10, index * 10 + 10)"
          :key="subindex"
          >
          <a href="javascript:;">
            <img :src="subitem.image" alt="">
            <span class="text">{{subitem.text}}</span>
          </a>
        </li>
      </ul>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'mall-banner',
  props: {
    mall: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mall-wrap{
  @include wh(100%, auto);
  padding: 0 16px;
  box-sizing: border-box;
  background-color: #fff;
  ul{
    @include wh(100%, 312px);
    display: grid;
    grid-template-columns: repeat(5, 20%);
    li{
      @include flex(column, center, center);
      align-content: center;
      a{
        @include wh(100%, 100%);
        @include flex(column, center, center);
        align-content: center;
        img{
          @include wh(80px, 80px);
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
