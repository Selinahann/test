<template>
  <div class="address-wrap">
    <header id="header">
      <SearchAddress
        v-model="keyword"
        @search="searchTip"
        class="hint-li"
        :scoped="scoped"
        >
        <template v-slot:default="scopedData">
          {{scopedData.hintList.name}}
        </template>
      </SearchAddress>
    </header>
    <main id="main">
      <div
      class="current"
      v-if="!keyword"
      @click="addressing"
      >
        <span>定位到当前位置</span>
      </div>
      <PopUp
      title="选择地址"
      :visible.sync="showpopup"
      >
        <ul>
          <li
          v-for="(item, index) in pois"
          :key="index"
          @click="search(item)"
          >
            <h2>{{item.name}}</h2>
            <p>{{item.address}}</p>
          </li>
        </ul>
      </PopUp>
      <LoadingAnimation :loading="showpopup"></LoadingAnimation>
    </main>
    <footer id="footer">
      <router-link
      to="/new/address"
      class="add-address"
      v-show="!showpopup"
      >
        新增地址
      </router-link>
    </footer>
  </div>
</template>

<script>
import SearchAddress from './components/SearchAddress.vue'
import AMap from 'AMap'
import map from '@/utils/map'
export default {
  name: 'address-page',
  components: {
    SearchAddress
  },
  data () {
    return {
      keyword: '',
      scoped: [],
      currentLocation: '',
      pois: [],
      showpopup: false
    }
  },
  watch: {
    keyword () {
      this.searchTip()
    }
  },
  methods: {
    searchTip () {
      AMap.plugin('AMap.Autocomplete', () => {
        const aotuOptions = {
          city: '全国'
        }
        const autoComplete = new AMap.Autocomplete(aotuOptions)
        autoComplete.search(this.keyword, (status, result) => {
          console.log(result)
          if (result) {
            this.scoped = result.tips
            // this.currentLocation = result.tips[0].district
          } else {
            this.scoped = []
          }
        })
      })
    },
    search (item) {
      this.$store.commit('user/SET_ADDRESS', {
        district: item.address,
        formattedAddress: item.name
      })
      this.$router.push('/home')
    },
    addressing () {
      this.$loading.show()
      map.geolocation().then(res => {
        this.showpopup = true
        this.pois = res.pois
        this.$loading.hide()
        console.log(res)
      }).catch(() => {
        // this.$message.error('定位失败')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.address-wrap{
  @include wh(100vw, 100vh);
  background-color: #f8f8f8;
  #header{
    @include wh(100vw, auto);
    @include flex(row, flex-start, center)
  }
  #main{
    @include wh(100vw, auto);
    .current{
      @include wh(100vw, 70px);
      line-height: 70px;
      font-size: 24px;
      margin-top: 22px;
      padding: 0 20px;
      box-sizing: border-box;
      background-color: #fff;
    }
    .popup-box {
      ul{
        background-color: #f6f6f6;
        li{
          padding: 40px 32px;
          border-bottom: 1px solid #E0E0E0;
          font-size: 28px;
          h2{
            margin-bottom: 16px;
          }
          p{
            color: #999;
          }
        }
      }
    }
  }
  #footer {
    @include wh(100vw, auto);
    .add-address{
      @include wh(100vw, 85px);
      @include center(0.85rem);
      background-color: #fff;
      bottom: 0;
      position: fixed;
      color: $color-primary;
      font-size: 24px;
    }
  }
}
</style>
