<template>
  <nav class="tab-wrap" :class="{
    [layout] : true
  }">
      <ul>
        <li
        v-for="(item, index) in tab"
        :key="index"
        :class="{ active: activeIndex === index}"
        @click="tabChange(item, index)"
        >{{item[tabName]}}</li>
      </ul>
    </nav>
</template>

<script>
export default {
  name: 'tab-change',
  props: {
    tab: Array,
    tabName: {
      type: String,
      default: 'text'
    },
    layout: {
      type: String,
      default: 'row'
    }
  },
  watch: {
    tab () {
      this.activeIndex = 0
    }
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
  @include wh(auto, auto);
  overflow-x: scroll;
  &::-webkit-scrollbar{
    width: 0;
    height: 0;
  }
  position: sticky;
  top: 0px;
  z-index: 10;
  padding: 0 32px;
  box-sizing: border-box;
  border-bottom: 1px solid #E2E2E2;
  background-color: #fff;
  ul{
    width: auto;
    @include flex(row, space-between, center);
    li{
      padding: 0 20px;
      flex-shrink: 0;
      font-size: 28px;
      line-height: 104px;
      font-weight: 400;
      &.active{
        color: $color-primary;
        font-weight: 700;
      }
    }
  }
  &.column{
    height: 100%;
    width:172px;
    background-color: #fafafa;
    padding: 0;
    overflow: auto;
    ul{
      width: auto;
      @include flex(column, space-between, center);
      overflow: scroll;
      li{
        width: 172px;
        padding: 0;
        text-align: center;
        font-size: 12px;
        color: #999;
        &.active{
          color: $color-primary;
          font-weight: 700;
          background-color: #fff;
        }
      }
    }
  }
}
</style>
