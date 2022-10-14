<template>
<transition
  enter-active-class="animate__animated animate__fadeIn"
  leave-active-class="animate__animated animate__fadeOut"
  appear
  @after-leave="afterLeave"
>
  <div class="message" :class="[type]" v-show="show">
    {{msg}}
  </div>
</transition>
</template>

<script>
export default {
  name: 'message-popup',
  props: {
    msg: String,
    type: {
      type: String,
      default: 'info'
    }
  },
  data () {
    return {
      show: true
    }
  },
  methods: {
    afterLeave () {
      this.$destroy()
    }
  },
  mounted () {
    setTimeout(() => {
      this.show = false
    }, 2000)
  },
  destroyed () {
    document.body.removeChild(this.$el)
  }
}
</script>

<style lang="scss" scoped>
.message{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  @include center(90px);
  box-sizing: border-box;
  font-size: 24px;
  text-align: center;
  &.error{
    background-color: $color-primary;
    color: #fff;
  }
}
</style>
