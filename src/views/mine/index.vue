<template>
  <div class="mine-wrap">
    <Header />
    <Order/>
    <Cards />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Cards from './components/Cards.vue'
import Order from './components/Order.vue'
export default {
  name: 'mine-tab',
  components: {
    Header,
    Cards,
    Order
  }
}
</script>

<style lang="scss" scoped>
.mine-wrap{
  @include wh(100vw, 100vh);
  background-color: #f8f8f8;
}
</style>
