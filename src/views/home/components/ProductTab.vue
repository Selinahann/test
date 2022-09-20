<template>
  <nav class="tab-wrap">
      <ul>
        <li
        v-for="(item, index) in tab"
        :key="index"
        :class="{ active: activeIndex === index}"
        @click="tabChange(item, index)"
        >{{item.text}}</li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'tab-change',
  props: {
    tab: Array
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  methods: {
    tabChange (item, index) {
      this.activeIndex = index
      this.$emit('change', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.tab-wrap{
  @include wh(100%, 104px);
  position: sticky;
  top: 0px;
  z-index: 10;
  padding: 0 32px;
  box-sizing: border-box;
  border-bottom: 1px solid #E2E2E2;
  background-color: #fff;
  ul{
    @include flex(row, space-between, center);
    li{
      font-size: 28px;
      line-height: 104px;
      font-weight: 400;
      &.active{
        color: $color-primary;
        font-weight: 700;
      }
    }
  }
}
</style>
