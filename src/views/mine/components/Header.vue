<template>
  <header id="header">
    <div class="container">
      <div class="username">
        <h3>{{user_name}}</h3>
        <p>开启美好的一天</p>
      </div>
      <div class="userpic">
        <img :src="require('@/assets/image/userpic.jpg')" alt="">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'header-img',
  props: {
    user_name: String
  }
}
</script>

<style lang="scss" scoped>
#header{
  width: 750px;
  height: 264px;
  background: #FE3113;
  box-shadow: 0px 1px 1px 0px rgba(255,64,54,0.2);
  .container{
    @include wh(100%, 100%);
    @include flex(row, space-between, center);
    padding: 0 30px;
    box-sizing: border-box;
    .username{
      color: #fff;
      font-size: 12px;
      h3{
        font-size: 40px;
        margin-bottom: 7px;
      }
    }
    .userpic{
      img{
        @include wh(84px, 84px);
      }
    }
  }
}
</style>
