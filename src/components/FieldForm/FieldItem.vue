<template>
  <div class="field-item">
    <label v-if="label">{{label}}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'field-item',
  props: {
    label: String
  }
}
</script>

<style lang="scss" scoped>
.field-item{
  @include wh(100%, auto);
  @include flex(row);
  border-bottom: 1px solid #ccc;
  label{
    flex-shrink: 0;
    width: 200px;
    display: block;
    line-height: 88px;
    font-size: 12px;
  }
}
</style>
