<template>
  <div class="hot-zone">
    <div class="title">
      <h3>每日必购</h3>
      <p>大家都在买</p>
    </div>
    <div class="zone">
      <a
      href="javascript:;"
      class="item"
      v-for="(item, index) in zone"
      :key="index"
      :style="{ backgroundColor: item.color}"
      >
        <h3>{{item.title}}</h3>
        <p>热卖区</p>
        <p>
          <i class="iconfont">&#xeb8a;</i>
        </p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hot-zone',
  data () {
    return {
      zone: [
        {
          title: '生鲜',
          color: '#F7CB60'
        },
        {
          title: '食品饮料',
          color: '#F1655E'
        },
        {
          title: '居家百货',
          color: '#93E2B8'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.hot-zone{
  @include wh(100%, auto);
  background-color: #fff;
  .title{
    @include wh(100%, 80px);
    @include flex(row, flex-start, flex-end);
    font-size: 24px;
    padding: 16px;
    box-sizing: border-box;
    h3{
      font-size: 36px;
      font-weight: 600;
      margin-right: 10px;
    }
  }
  .zone{
    @include wh(100%, 304px);
    display: flex;
    .item{
      @include wh(33.33%, 100%);
      @include flex(column, center, center);
      color: #fff;
    }
  }
}
</style>
