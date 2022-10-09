<template>
<transition
  enter-active-class="animate__animated animate__fadeIn"
  leave-active-class="animate__animated animate__fadeOut"
>
  <div class="popup-wrap" v-show="visible" @click.prevent="close">
    <transition
      enter-active-class="animate__animated animate__slideInUp"
      leave-active-class="animate__animated animate__slideOutDown"
    >
      <div class="popup-box" v-show="visible" @click.stop>
        <header>
          <h2 class="title">{{title}}</h2>
          <a
          href="javascript:;"
          class="cancle"
          @click="close"
          >取消</a>
        </header>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</transition>
</template>

<script>
export default {
  name: 'pop-up',
  props: {
    title: String,
    visible: Boolean
  },
  methods: {
    close () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.popup-wrap{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  .popup-box{
    @include wh(100%, auto);
    overflow: auto;
    position: absolute;
    bottom: 0;
    background: #fff;
    header {
      @include flex(row, space-between, center);
      height: 94px;
      padding: 0 32px;
      box-sizing: border-box;
      line-height: 94px;
      .title{
        font-size: 24px;
      }
      .cancle{
        color: $color-primary;
      }
    }
    .content{
      max-height: 50vh;
      overflow: auto;
    }
  }
}
</style>
