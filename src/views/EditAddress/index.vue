<template>
  <div class="form-wrap">
    <md-field>
      <md-input-item
        ref="input0"
        title="联系人"
        placeholder="请输入联系人"
        is-amount
        :maxlength="5"
      ></md-input-item>
      <md-input-item
        title="手机号"
        type="phone"
        v-model="phone"
        placeholder="请输入手机号"
      ></md-input-item>
      <md-input-item
        ref="input0"
        title="地址"
        placeholder="请选择小区、街道、大厦"
        is-amount
        :maxlength="15"
      ></md-input-item>
      <md-input-item
        ref="input0"
        title="详细地址"
        placeholder="请输入详细地址"
        is-amount
        :maxlength="15"
      ></md-input-item>
    </md-field>
    <button @click="submit">提交</button>
  </div>
</template>

<script>
import { InputItem, Field } from 'mand-mobile'

export default {
  name: 'input-item-demo',
  components: {
    [InputItem.name]: InputItem,
    [Field.name]: Field
  },
  data () {
    return {
      phone: '',
      money: '',
      digit: ''
    }
  },
  methods: {
    onInputKeydown (name, event) {
      // console.log(`[Mand Mobile InputItem keydown] ${event.keyCode}`)
    },
    onInputChange (name, value) {
      // console.log(`[Mand Mobile InputItem change] ${value}`)
    },
    submit () {}
  }
}
</script>

<style lang="scss" scoped>
.form-wrap{
  @include wh(100%, auto);
  ::v-deep .md-field{
    @include wh(100%, auto);
    @include flex(column);
    padding: 0 24px;
    box-sizing: border-box;
    border: 0;
    .md-field-content{
      @include wh(100%, auto);
      @include flex(column);
      .md-field-item{
        @include wh(100%, auto);
        .md-field-item-content{
          @include wh(100%, 90px);
          @include flex(row);
          line-height: 90px;
          .md-field-item-title{
            width: 200px;
            flex-shrink: 0;
          }
          .md-field-item-control{
            flex: 1;
            height: 100%;
            .md-input-item-input{
              @include wh(100%, 100%);
              border: 0;
            }
          }
      }
      }
    }
  }
  button{
    @include wh(100%, 88px);
    background: #FF3232;
    border: 0;
    color: #fff;
    margin-top: 72px;
  }
}
</style>
