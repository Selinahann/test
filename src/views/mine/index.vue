<template>
  <div class="mine-wrap">
    <Header :user_name="user_name"/>
    <Order/>
    <Cards />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Cards from './components/Cards.vue'
import Order from './components/Order.vue'
import { mapState } from 'vuex'
export default {
  name: 'mine-tab',
  data () {
    return {
      user: '',
      user_name: '',
      phone: ''
    }
  },
  components: {
    Header,
    Cards,
    Order
  },
  computed: {
    ...mapState('user', ['userInfo'])
  },
  created () {
    this.user = this.$store.state.user.userInfo[0]
    this.user_name = this.user.user_name
  }
}
</script>

<style lang="scss" scoped>
.mine-wrap{
  @include wh(100vw, 100vh);
  background-color: #f8f8f8;
}
</style>
