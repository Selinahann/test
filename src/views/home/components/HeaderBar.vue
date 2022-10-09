<template>
  <header id="header">
    <h1 class="title">校园超市</h1>
    <div class="address-wrap">
      <router-link
      to="/address"
      href="javascript:;">
        <i class="iconfont address">&#xe644;</i>
        <span>
          {{$store.state.user.address.formattedAddress}}
        </span>
        <i class="iconfont">&#xe616;</i>
      </router-link>
      <router-link
      to="/search">
        <i class="iconfont">&#xe622;</i>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header-bar'
}
</script>

<style lang="scss" scoped>
#header{
  @include wh(100%, auto);
  background-color: #fff;
  .title{
    line-height: 36px;
    text-align: center;
    font-size: 36px;
    padding-top: 31px;
    padding-bottom: 24px;
    font-weight: 600;
  }
  .address-wrap{
    @include flex(row, space-between, center);
    padding: 0 16px;
    box-sizing: border-box;
    a{
      font-size: 24px;
      color:$color-grey;
      .address{
        @include wh(54px, 54px);
        display: inline-block;
        text-align: center;
        line-height: 54px;
      }
    }
  }
}
</style>
