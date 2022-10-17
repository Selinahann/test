<template>
  <div class="button-wrap">
    <button @click="val -= 1">-</button>
    <span>{{val}}</span>
    <button @click="val += 1">+</button>
  </div>
</template>

<script>
export default {
  name: 'NumButton',
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      val: this.value
    }
  },
  watch: {
    value (newValue) {
      this.val = newValue
    },
    val (newValue) {
      this.$emit('input', newValue)
      this.$emit('change', newValue)
    }
  }
}
</script>

<style lang="scss" scoped>
.button-wrap{
  @include wh(auto, auto);
  @include flex(row, flex-start, center);
  color: #333;
  button {
    @include wh(48px, 48px);
    border-radius: 50%;
    font-size: 36px;
    border: 0;
  }
  span{
    font-size: 28px;
    padding: 0 10px;
  }
}
</style>
