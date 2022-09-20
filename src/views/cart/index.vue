<template>
  <div class="cart-wrap">购物车</div>
</template>

<script>
export default {
  name: 'cart-tab',
  created () {
    this.categoryData()
  },
  methods: {
    categoryData () {
      this.$api.category.tree().then(res => {
        console.log(res.data.tree)
      })
    }
  }
}
</script>
