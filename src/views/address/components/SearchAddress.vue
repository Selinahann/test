<template>
  <div class="search-bar">
    <div class="input-wrap">
      <div class="location">
        <span>
          {{address || $store.state.user.address.formattedAddress}}
        </span>
        <i class="iconfont">&#xe616;</i>
      </div>
      <input type="text" v-model="val" @keydown.enter="search">
    </div>
    <div
    class="search-hint-wrap"
    v-show="activeIndex"
    >
      <ul>
        <li
        v-for="(item, index) in scoped"
        :key="index"
        @click="addressInfo(item)"
        >
          <slot :hintList="item"></slot>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search-bar',
  props: {
    value: String,
    clear: Boolean,
    scoped: Array
  },
  data () {
    return {
      val: '',
      activeIndex: 1,
      address: ''
    }
  },
  watch: {
    val () {
      this.$emit('input', this.val)
    },
    value () {
      this.val = this.value
    }
  },
  mounted () {
    console.log(this.$attrs)
  },
  methods: {
    search (index) {
      this.$emit('search', this.val)
      this.activeIndex = 1
    },
    addressInfo (item) {
      this.activeIndex = 0
      this.$store.commit('user/SET_ADDRESS', {
        district: item.district,
        street: item.address,
        formattedAddress: item.name
      })
      this.address = this.$store.state.location.address.formattedAddress
      this.$router.push('/home')
    }
  }
}
</script>

<style lang="scss" scoped>
.search-bar{
    @include wh(100%, auto);
    @include flex(column, flex-start, center);
    padding: 0 20px;
    box-sizing: border-box;
    background-color: #fff;
    .input-wrap{
      @include wh(100%, 98px);
      @include flex(row, flex-start, center);
      .location{
        max-width: 120px;
        height: 32px;;
        overflow: hidden;
        @include flex(row);
        font-size: 12px;
        .current-localtion{
          @include wh(100%, auto);
        }
      }
    }
    input{
      @include wh(594px, 64px);
      border-radius: 32px;
      border: 0;
      padding-left: 20px;
      box-sizing: border-box;
      color: #999999;
      font-size: 24px;
      background-color: #f6f6f6;
    }
    .search-hint-wrap{
      @include wh(100%, auto);
      padding: 0 40px;
      box-sizing: border-box;
      ul{
        @include wh(100%, auto);
        li{
          @include wh(100%, 60px);
          font-size: 14px;
          line-height: 60px;
        }
      }
    }
  }
</style>
