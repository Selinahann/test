<template>
  <div id="page">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <div id="footer">
      <nav>
        <router-link
        v-for="(item, index) in footerTabs"
        :key="index"
        :to="item.path"
        active-class="active"
        >
          <span class="num" v-if="item.path === '/cart'">{{count}}</span>
          <img :src="item.icon" alt="" class="icon">
          <img :src="item.select_icon" alt="" class="select-icon">
          <span class="text">{{item.text}}</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'main-tab',
  data () {
    return {
      footerTabs: [
        {
          icon: require('@/assets/image/home.png'),
          select_icon: require('@/assets/image/home-select.png'),
          text: '首页',
          path: '/home'
        },
        {
          icon: require('@/assets/image/classify.png'),
          select_icon: require('@/assets/image/classify-select.png'),
          text: '分类',
          path: '/classify'
        },
        {
          icon: require('@/assets/image/cart.png'),
          select_icon: require('@/assets/image/cart-select.png'),
          text: '购物车',
          path: '/cart'
        },
        {
          icon: require('@/assets/image/mine.png'),
          select_icon: require('@/assets/image/mine-select.png'),
          text: '我的',
          path: '/mine'
        }
      ]
    }
  },
  computed: {
    ...mapGetters('cart', ['count'])
  }
}
</script>

<style lang="scss" scoped>
#page{
  @include wh(100vw, 100vh);
  // display: flex;
  // flex-direction: row;
  background-color: #F8F8F8;
}
#footer {
  width: 100vw;
  height: 95px;
  nav{
    @include wh(100%, 95px);
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    justify-content: space-around;
    background-color: #fff;
    a{
      @include wh(25%, auto);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 7px;
      padding-bottom: 3px;
      img{
        @include wh(50px, 50px);
      }
      .select-icon{
        display: none;
      }
      .text{
        font-size: 24px;
        margin-top: 4px;
      }
      &.active{
        color: $color-primary;
        .icon{
          display: none;
        }
        .select-icon{
          display: block;
        }
      }
    }
  }
}
</style>
