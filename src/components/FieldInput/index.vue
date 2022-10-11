<template>
  <input type="text" v-model="val">
</template>

<script>
export default {
  name: 'FieldInput',
  props: {
    placeholder: String,
    value: [String, Number],
    model: {
      type: String,
      default: 'text'
    }
  },
  data () {
    return {
      val: ''
    }
  },
  watch: {
    value (value) {
      this.val = value
    },
    val (value) {
      this.$emit('input', value)
    }
  },
  computed: {
    formattedVal: {
      get () {
        return this.val
      },
      set () {}
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  flex: 1;
  height: 88px;
  border: 0;
  font-size: 24px;
  color: #BEBEBE;
  line-height: 88px;
}
</style>
