<template>
  <div class="order-wrap">
    <div class="order">
      <header>
        <h3>
          我的订单
        </h3>
        <div class="more">
          <span>查看全部</span>
          <i class="iconfont">&#xe616;</i>
        </div>
      </header>
      <nav>
        <ul>
          <li
          v-for="(item, index) in iconList"
          :key="index"
          >
            <img :src="item.icon" alt="">
            <span>{{item.text}}</span>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'order-part',
  data () {
    return {
      iconList: [
        {
          icon: require('@/assets/image/pay@2x.png'),
          text: '待付款'
        },
        {
          icon: require('@/assets/image/deliver@2x.png'),
          text: '待配送'
        },
        {
          icon: require('@/assets/image/ship@2x.png'),
          text: '已发货'
        },
        {
          icon: require('@/assets/image/service@2x.png'),
          text: '退款/售后'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.order-wrap{
  width: 100%;
  height: 299px;
  position: relative;
  .order{
    @include flex(column, space-between, center);
    position: absolute;
    width: 690px;
    height: 299px;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    padding: 40px 30px;
    box-sizing: border-box;
    background: #FFFFFF;
    box-shadow: 0px 33px 20px -20px rgba(0,0,0,0.11), 0px 0px 17px -3px rgba(0,0,0,0.06);
    border-radius: 12px;
    border: 1px solid #F0F0F0;
    header{
      @include wh(100%, 34px);
      @include flex(row, space-between, center);
      line-height: 34px;
      h3{
        font-size: 28px;
      }
      .more{
        font-size: 24px;
        color: #999999;
      }
    }
    nav{
      @include wh(100%, auto);
      ul{
        @include wh(100%, auto);
        @include flex(row, space-between, center);
        li{
          @include flex(column, space-between, center);
          img{
            @include wh(64px, 50px);
          }
        }
      }
    }
  }
}
</style>
