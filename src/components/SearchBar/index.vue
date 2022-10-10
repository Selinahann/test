<template>
  <div class="search-bar">
    <input type="text" v-model="val" @keydown.enter="search">
    <div
    class="search-hint-wrap"
    v-show="activeIndex"
    >
      <ul>
        <li
        v-for="(item, index) in scoped"
        :key="index"
        @click="fetchProduct"
        >
          <slot :hintList="item"></slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    value: String,
    clear: Boolean,
    scoped: Array
  },
  data () {
    return {
      val: '',
      activeIndex: 1
    }
  },
  watch: {
    val () {
      this.$emit('input', this.val)
    },
    value () {
      this.val = this.value
    }
  },
  mounted () {
    console.log(this.$attrs)
  },
  methods: {
    search (index) {
      this.$emit('search', this.val)
      this.activeIndex = 1
    },
    fetchProduct () {
      this.activeIndex = 0
    }
  }
}
</script>

<style lang="scss" scoped>
.search-bar{
    @include wh(100%, auto);
    @include flex(column, flex-start, center);
    padding: 0 20px;
    box-sizing: border-box;
    background-color: #fff;
    input{
      flex: 1;
      height: 64px;
      border-radius: 32px;
      border: 0;
      padding-left: 20px;
      box-sizing: border-box;
      color: #999999;
      font-size: 24px;
      background-color: #f6f6f6;
    }
    .search-hint-wrap{
      @include wh(100%, auto);
      padding: 0 40px;
      box-sizing: border-box;
      ul{
        @include wh(100%, auto);
        li{
          @include wh(100%, 60px);
          font-size: 14px;
          line-height: 60px;
        }
      }
    }
  }
</style>
