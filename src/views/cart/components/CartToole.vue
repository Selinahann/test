<template>
  <div class="cart-toole">
    <label>
      <input type="checkbox" v-model="isActive">
      全选
    </label>
    <div class="outher">
      合计：<output>￥<b></b></output>
      <button>去结算</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CartToole',
  computed: {
    ...mapState('cart', ['cartList']),
    isActive: {
      get () {
        return this.cartList.reduce((prev, item) => {
          if (item.isActive === '0') return false
          return prev
        }, true)
      },
      set (value) {
        this.$api.cart.updateAll({
          id: this.cartList.map(item => item.id),
          isActive: value ? '1' : '0'
        }).then(() => {
          this.$store.dispatch('cart/getCartList')
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cart-toole{
  @include wh(100%, auto);
  @include flex(row, space-between, center);
  padding: 0 24px;
  box-sizing: border-box;
  position: fixed;
  bottom: 95px;
  background-color: #fff;
  label{
    @include flex(row, flex-start, center);
    font-size: 28px;
    line-height: 99px;
  }
}
</style>
