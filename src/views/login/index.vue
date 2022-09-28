<template>
  <div class="login-wrap">
    <header id="header">
      <h1>手机快捷登录</h1>
      <p>未注册的手机号将自动登录</p>
    </header>
    <main id="main">
      <div class="form">
        <div class="form-item">
          <input type="text" placeholder="请输入手机号" v-model="loginForm.phone">
        </div>
        <div class="form-item">
          <input type="text" placeholder="请输入验证码" v-model="loginForm.code">
          <button
          class="get-code"
          :disabled="codeDisable"
          @click="getCode">{{timer > 0 ? `${timer}秒后重新获取` :'获取验证码'}}</button>
        </div>
      </div>
      <div class="login-btn">
        <button
        class="btn"
        @click="login">登录</button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'login-page',
  data () {
    return {
      loginForm: {
        phone: '',
        code: ''
      },
      timer: 0,
      userIfon: ''
    }
  },
  computed: {
    codeDisable () {
      return this.loginForm.phone.length !== 11
    }
  },
  methods: {
    async getCode () {
      const data = await this.$api.user.sendCode({
        phone: this.loginForm.phone
      })
      console.log(data)
      this.timer = 60
      const interval = setInterval(() => {
        this.timer -= 1
        if (this.timer <= 0) {
          clearInterval(interval)
        }
      }, 1000)
    },
    async login () {
      const res = await this.$api.user.login({
        phone: this.loginForm.phone,
        code: this.loginForm.code
      })
      const callbackUrl = this.$route.query.callback || '/home'
      localStorage.setItem('token', res.token)
      this.$store.dispatch('user/getUserInfo').then(res => {
        this.$router.replace(callbackUrl)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-wrap{
  @include wh(100vw, 100vh);
  @include flex(column);
  #header{
    @include wh(100%, auto);
    padding: 40px 40px;
    box-sizing: border-box;
    h1{
      font-size: 46px;
    }
    p{
      margin-top: 20px;
      font-size: 24px;
      color: #999999;
    }
  }
  #main{
    @include wh(100%, auto);
    flex: 1;
    .form{
      @include wh(100%, auto);
      margin-top: 120px;
      padding: 0px 40px;
      box-sizing: border-box;
      .form-item{
        @include wh(100%, 90px);
        @include flex(row, space-between, center);
        border-bottom: 1px solid #eeeeee;
        input{
          flex: 1;
          height: 100%;
          border: 0;
          line-height: 90px;
          font-size: 28px;
          color: #999999;
        }
        .get-code{
          height: 100%;
          line-height: 80px;
          border: 0;
          background-color: #fff;
          font-size: 28px;
          color: #4271FF;
          &:disabled {
            color: #999999;
          }
        }
      }
    }
    .login-btn{
      @include wh(100%, auto);
      margin-top: 40px;
      padding: 0px 40px;
      box-sizing: border-box;
      button{
        @include wh(100%, 40px);
        @include center(40px);
        background-color: #4271FF;
        border: 0;
        color: #fff;
        font-size: 28px;
        border-radius: 40px;
      }
    }
  }
}
</style>
