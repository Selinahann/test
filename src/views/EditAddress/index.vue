<template>
  <div class="form-wrap">
    <md-field>
      <md-input-item
        ref="contact"
        title="联系人"
        type="text"
        v-model="formData.name"
        placeholder="请输入联系人"
        :maxlength="5"
      ></md-input-item>
      <md-input-item
        ref="phone"
        title="手机号"
        type="phone"
        v-model="formData.phone"
        placeholder="请输入手机号"
      ></md-input-item>
      <md-input-item
        ref="address"
        title="地址"
        type="text"
        v-model="formData.location"
        placeholder="请选择小区、街道、大厦"
        readonly
        :maxlength="15"
      >
        <div class="input-operator" slot="right" @click="$router.push('/map')">
          <i class="iconfont">&#xe616;</i>
        </div>
      </md-input-item>
      <md-input-item
        ref="detailAddress"
        title="详细地址"
        type="text"
        v-model="formData.address"
        placeholder="请输入详细地址"
        :maxlength="15"
      ></md-input-item>
    </md-field>
    {{formData}}
    <button @click="submit">提交</button>
  </div>
</template>

<script>
import { InputItem, Field } from 'mand-mobile'
import storage from '@/utils/storage.js'

export default {
  name: 'input-item-demo',
  components: {
    [InputItem.name]: InputItem,
    [Field.name]: Field
  },
  data () {
    return {
      formData: {
        phone: '',
        name: '',
        address: '',
        location: ''
      },
      userAddressInfo: []
    }
  },
  created () {
    const formData = storage.getItem('addressFormData')
    if (formData) {
      this.formData = formData
    }
    this.$root.$on('changeLocation', (location) => {
      this.formData.location = location.name
    })
  },
  methods: {
    validate () {
      return new Promise((resolve, reject) => {
        this.userAddressInfo = this.$children[0].$children
        for (let i = 0; i < this.userAddressInfo.length; i++) {
          if (this.userAddressInfo[i].type !== 'phone') {
            if (this.userAddressInfo[i].value) {
              resolve()
            } else {
              // alert(`请输入正确的${this.userAddressInfo[i].title}`)
              this.$message.error(`请输入正确的${this.userAddressInfo[i].title}`)
              return
            }
          } else {
            if (this.userAddressInfo[i].value) {
              if (this.userAddressInfo[i].value.length === 11) {
                resolve()
              } else {
                this.$message.error(`请输入正确的${this.userAddressInfo[i].title}`)
                alert('请输入正确的手机号')
                return
              }
            } else {
              this.$message.error(`请输入正确的${this.userAddressInfo[i].title}`)
              alert(`请输入正确的${this.userAddressInfo[i].title}`)
              return
            }
          }
        }
      })
    },
    submit () {
      this.validate().then(() => {
        this.$api.address.create(this.formData).then(res => {
          this.$message.success('添加成功')
          this.$router.replace('/address')
          this.$store.dispatch('user/getUserAddress')
        })
      }).catch((e) => {
        this.$message.error(e)
      })
    }
  },
  beforeRouteLeave (to, from, next) {
    if (to.path !== '/map') {
      this.formData = {
        phone: '',
        name: '',
        address: '',
        location: ''
      }
      storage.removeItem('addressFormData')
    } else {
      storage.setItem('addressFormData', this.formData)
    }
    next()
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
