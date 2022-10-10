<template>
  <div class="loading-wrap" v-show="show">
    <a href="javascript:;"></a>
  </div>
</template>

<script>
export default {
  name: 'LoadingAnimation',
  data () {
    return {
      show: false
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-wrap{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  @include flex(row, center, center);
  a{
    background-image: url(https://img.dmallcdn.com//dshop/201903/40208262-8001-4c19-ad20-370a039ed243);
    @include wh(140px, 140px);
    background-size: auto 140px;
    background-position: 0 0;
    animation: loading .9s steps(25) infinite;
  }
}
@keyframes loading {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -3500px 0;
  }
}
</style>
