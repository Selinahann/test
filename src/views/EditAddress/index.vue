<template>
  <div>
    <FieldForm>
      <field-item label="联系人">
        <field-input />
      </field-item>
      <field-item label="手机号">
        <field-input />
      </field-item>
      <field-item label="地址">
        <field-input />
      </field-item>
      <field-item label="详细地址">
        <field-input />
      </field-item>
    </FieldForm>
    <button>添加</button>
  </div>
</template>

<script>
export default {
  name: 'edit-address'
}
</script>

<style lang="scss" scoped>

</style>
