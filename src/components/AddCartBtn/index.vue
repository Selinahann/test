<template>
  <div>
    <div class="add-cart" @click.stop="additem">
      <slot></slot>
    </div>
    <PopUp :visible.sync="showpopup" class="cart-item">
      <dl
      >
        <dt class="image">
          <img :src="propductItem.img" alt="">
        </dt>
        <dd>
          <header>
            <h3 class="title">{{propductItem.name}}</h3>
          </header>
          <footer>
            <div class="price-wrap">
              <span class="price">
                <i>￥</i>
                <i class="num">{{propductItem.price | formatPrice}}</i>
              </span>
              <span class="subprice">
                <i>￥</i>
                <i class="num">{{propductItem.price | formatPrice}}</i>
              </span>
            </div>
          </footer>
        </dd>
      </dl>
      <NumButton v-model="num"></NumButton>
      <button @click ="addbtn">添加购物车</button>
    </PopUp>
  </div>
</template>

<script>
export default {
  name: 'AddCartBtn',
  props: {
    visible: Boolean,
    propductItem: Object
  },
  data () {
    return {
      showpopup: false,
      num: 1
    }
  },
  filters: {
    formatPrice (price) {
      return price / 100
    }
  },
  methods: {
    additem () {
      this.showpopup = true
      this.$emit('click')
    },
    addbtn () {
      this.$api.cart.add({
        product_id: this.propductItem.id,
        num: this.num
      }).then(() => {
        this.$store.dispatch('cart/getCartList')
        this.showpopup = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.add-cart{
  button {
    @include wh(45px, 45px);
  }
}
.cart-item{
  z-index:100;
  @include wh(100%, auto);
  dl {
    @include wh(100%, auto);
    dt{
      @include wh(100%, auto);
      img{
        @include wh(100%, auto);
      }
    }
    dd{
      flex: 1;
      height: 240px;
      @include flex(column, space-between, flex-start);
      color: #333;
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
      }
    }
  }
}
</style>
