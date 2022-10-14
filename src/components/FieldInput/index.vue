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
    formatval: {
      get () {
        return this.val.replace(/(\d{3})(\d{0,4})(\d{0,4})/, '$1 $2 $3').replace(/\s+$/, '')
      },
      set (value) {
        this.val = value.replace(/\s+/g, '')
      }
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
