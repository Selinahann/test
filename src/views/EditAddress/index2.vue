<template>
  <div class="form-wrap">
    <FieldForm :model="formData" :rules="rules" ref="form">
      <field-item label="联系人">
        <field-input v-model="formData.name"/>
      </field-item>
      <field-item label="手机号">
        <field-input v-model="formData.phone"/>
      </field-item>
      <field-item label="地址">
        <field-input v-model="formData.address"/>
      </field-item>
      <field-item label="详细地址">
        <field-input/>
      </field-item>
    </FieldForm>
    <button @click="submit">添加</button>
  </div>
</template>

<script>
export default {
  name: 'edit-address',
  data () {
    return {
      formData: {
        phone: '',
        name: '',
        address: '',
        money: ''
      },
      rules: {
        phone: [
          { required: true, message: '请输入手机号' },
          { type: 'phone', message: '手机号格式不正确' }
        ],
        name: [
          { required: true, message: '请输入联系人姓名' },
          { min: 2, max: 10, message: '联系人格式不正确' }
        ],
        address: [
          { required: true, message: '请输入详细地址地址' }
        ]
      }
    }
  },
  methods: {
    submit () {
      // this.$refs.form.validate().then(() => {
      //   console.log('提交')
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
.form-wrap{
  button{
    @include wh(100%, 88px);
    background: #FF3232;
    border: 0;
    color: #fff;
    margin-top: 72px;
  }
}
</style>
