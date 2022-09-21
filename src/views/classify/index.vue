<template>
  <div class="classify-wrap">
    <header id="header">
      <div class="container">
        <i class="iconfont">&#xe622;</i>
        <input type="text" placeholder="搜索校园超市商品">
      </div>
    </header>
    <main id="main">
      <TabChange
      class="left-tab"
      :category="category"
      />
    </main>
  </div>
</template>

<script>
export default {
  name: 'classify-tab',
  data () {
    return {
      category: []
    }
  },
  created () {
    this.initData()
  },
  methods: {
    initData () {
      this.$api.category.tree().then(res => {
        this.category = res.data.data
        console.log(res.data.data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.classify-wrap{
  @include wh(100vw, 100vh);
  #header{
    @include wh(100vw, 98px);
    @include flex(row, center, center);
    padding: 0 40px;
    box-sizing: border-box;
    background-color: #fff;
    .container{
      @include wh(100%, 64px);
      @include flex(row, flex-start, center);
      background-color: #f6f6f6;
      padding: 0 30px;
      box-sizing: border-box;
      border-radius: 32px;
      i.iconfont{
        font-size: 22px;
        margin-right: 20px;
      }
      input {
        width: 100%;
        height: 100%;
        border: 0;
        font-size: 24px;
        background-color: #f6f6f6;
      }
    }
  }
  #main{
    @include flex(row, flex-start, flex-start);
  }
}
</style>
