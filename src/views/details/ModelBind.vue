<template>
  <div>
    <input type="text" v-model="val" @keydown="search">
  </div>
</template>

<script>
export default {
  name: 'ModelBind',
  props: {
    value: String
  },
  data () {
    return {
      val: ''
    }
  },
  watch: {
    val () {
      this.$emit('update:value', this.val)
    },
    value () {
      this.val = this.value
    }
  },
  methods: {
    search () {}
  }
}
</script>
