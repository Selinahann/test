<template>
  <div class="cart-wrap">
    <CartList></CartList>
    <CartToole></CartToole>
  </div>
</template>

<script>
import CartList from './components/CartList.vue'
import CartToole from './components/CartToole.vue'
export default {
  name: 'cart-tab',
  components: {
    CartList,
    CartToole
  },
  data () {
    return {}
  },
  created () {}
}
</script>
