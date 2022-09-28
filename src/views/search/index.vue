<template>
  <div id="search">
    <SearchBar
    v-model="keyword"
    @search="search"
    class="hint-li"
    :scoped="scoped"
    >
      <template v-slot:default="scopedData">
        {{scopedData.hintList.text}}
      </template>
    </SearchBar>
  </div>
</template>

<script>
export default {
  name: 'search-page',
  data () {
    return {
      keyword: '',
      scoped: [],
      sql: {
        keyword: ''
      }
    }
  },
  watch: {
    sql: {
      handler: 'search',
      deep: true
    }
  },
  methods: {
    async search () {
      this.sql.keyword = this.keyword
      const res = await this.$api.product.keyword(this.sql)
      this.scoped = res.data
    }
  }
}
</script>

<style lang="scss" scoped>
#search{
  @include wh(100vw, 100vh);
}

</style>
