<template>
  <div class="product-wrap">
    <dl
    v-for="(item, index) in cartList"
    :key="index"
    >
      <dt class="image">
        <input type="checkbox" :checked="item.isActive === '1'" @click="handlerActiveChange($event, item)">
        <img :src="item.img" alt="">
      </dt>
      <dd>
        <header>
          <h3 class="title">{{item.name}}</h3>
        </header>
        <footer>
          <div class="price-wrap">
            <span class="price">
              <i>￥</i>
              <i class="num">{{item.price | formatPrice}}</i>
            </span>
            <span class="subprice">
              <i>￥</i>
              <i class="num">{{item.price | formatPrice}}</i>
            </span>
          </div>
          <NumButton class="num-btn" v-model="item.num" @change="numChange(item)"></NumButton>
        </footer>
      </dd>
    </dl>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CartList',
  data () {
    return {}
  },
  computed: {
    ...mapState('cart', ['cartList'])
  },
  filters: {
    formatPrice (price) {
      return price / 100
    }
  },
  methods: {
    numChange (item) {
      if (item.num <= 0) {
        if (confirm('确定要删除该商品吗？')) {
          this.$api.cart.delete(item.id)
          this.$store.dispatch('cart/getCartList')
        } else {
          this.$nextTick(() => {
            item.num = 1
          })
        }
      } else {
        this.$api.cart.update(item.id, {
          num: item.num
        })
      }
    },
    handlerActiveChange (e, item) {
      this.$api.cart.update(item.id, {
        isActive: e.target.checked ? '1' : '0'
      }).then(() => {
        this.$store.dispatch('cart/getCartList')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.product-wrap{
  @include wh(100%, auto);
  background-color: #fff;
  dl{
    @include wh(100%, auto);
    @include flex(row, flex-start, flex-start);
    padding: 33px 30px;
    box-sizing: border-box;
    border-bottom: 1px solid #E2E2E2;
    dt{
      @include wh(240px, 240px);
      margin-right: 30px;
      img{
        @include wh(240px, 240px);
      }
    }
    dd{
      flex: 1;
      height: 240px;
      @include flex(column, space-between, flex-start);
      header{
        h3{
          font-size: 32px;
          margin-bottom: 12px;
        }
      }
      footer{
        width: 100%;
        @include flex(row, space-between, center);
        .price-wrap{
          i{
            font-style: normal;
          }
          .price{
            color: $color-primary;
            i{
              font-size: 22px;
            }
            .num{
              font-size: 36px;
            }
          }
          .subprice{
            text-decoration: line-through;
            color: #C0C0C0;
          }
        }
        .add-btn{
          @include wh(66px, 66px);
          border-radius: 50%;
          background-color: $color-primary;
          text-align: center;
          line-height: 66px;
          color: #fff;
          i{
            font-size: 40px;
          }
        }
      }
    }
  }
}
</style>
