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
      tab-name="categoryName"
      :tab="leftMenu"
      layout="column"
      @change="navChange"
      />
      <div class="right-main">
        <TabChange
        class="right-tab"
        :tab="rightMenu"
        tab-name="categoryName"
        />
        <ProductList :product="product"/>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'classify-tab',
  data () {
    return {
      leftMenu: [],
      rightMenu: [],
      product: [],
      fetchProductParams: {
        page: 1,
        page_size: 10,
        class_id: 1
      }
    }
  },
  created () {
    this.initData()
  },
  watch: {
    fetchProductParams: {
      handler: 'fetchProductList',
      deep: true,
      immediate: true
    }
  },
  methods: {
    async initData () {
      const res = await this.$api.category.tree()
      this.leftMenu = res.data
      this.rightMenu = [{
        categoryId: res.data[0].categoryId,
        categoryName: '全部'
      }].concat(res.data[0].children)
    },
    async fetchProductList () {
      const res = await this.$api.product.list(this.fetchProductParams)
      if (this.fetchProductParams.page === 1) {
        this.product = res.data
      } else {
        this.product = this.product.concat(res.data)
      }
    },
    navChange (item) {
      console.log(item.categoryId)
      if (item.children) {
        this.fetchProductParams.class_id = item.categoryId
        this.fetchProductParams.page = 1
        this.rightMenu = [{
          categoryId: item.categoryId,
          categoryName: '全部'
        }].concat(item.children)
      } else {
        this.rightMenu = [{ categoryName: '全部' }]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.classify-wrap{
  @include wh(100vw, 100vh);
  display: flex;
  flex-direction: column;
  overflow: hidden;
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
    width: 100%;
    @include flex(row, flex-start, flex-start);
    flex: 1;
    overflow: hidden;
    ::v-deep .right-main{
      width: calc(100% - 172px);
      flex-shrink: 0;
      .tab-wrap{
        height: 55px;
        ul {
          li {
            font-size: 12px;
            color: #999;
            line-height: 55px;
            &.active{
              color: #333;
              font-weight: normal;
            }
          }
        }
      }
    }
  }
}
</style>
