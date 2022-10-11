<template>
  <div class="fields-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FieldForm',
  props: {
    model: Object,
    rules: Object
  },
  methods: {
    // check (value, rule) {
    //   let message = ''
    //   rule.forEach(item => {
    //     if (item.required && !value) {
    //       message = item.message
    //     } else if ((item.min || item.max) && (value.length > item.max || value.length < item.min)) {
    //       message = item.message
    //     }
    //   })
    // },
    // validate () {
    //   const fields = Object.keys(this.model)
    //   for (let i = 0; i < fields.length; i++) {
    //     const name = fields[i]
    //     const rule = this.rules[name]
    //     const value = this.model[name]
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
.fields-form{
  @include wh(100%, auto);
  padding: 0 24px;
  box-sizing: border-box;
}
</style>
