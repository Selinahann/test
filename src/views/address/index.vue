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
      <div class="history-list">
        <h2 class="title">历史地址</h2>
        <div class="list-wrap">
          <ul>
            <li v-for="(item, index) in userAddress" :key="index">
              <input
                type="checkbox"
                :checked="item.isDefault === '1'"
                @change="selectAddress($event, item)"
              >
              <div class="item">
                <h3>{{item.name}}</h3>
                <p>{{item.phone}}</p>
                <p>{{item.address}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
    <footer id="footer">
      <router-link
      to="/edit/address"
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
import { mapState } from 'vuex'
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
  computed: {
    ...mapState('user', ['userAddress'])
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
      }).catch(() => {
        this.$message.error('定位失败')
      })
    },
    selectAddress (e, item) {
      console.log(e.target.checked, item)
      this.$api.address.update(item.id, {
        isDefault: e.target.checked ? '1' : '0'
      }).then(() => {
        this.$store.dispatch('user/getUserAddress')
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
    .history-list{
      @include wh(100%, auto);
      margin-top: 20px;
      h2.title {
        @include wh(100%, auto);
        padding: 24px;
        box-sizing: border-box;
        font-size: 24px;
      }
      .list-wrap{
        @include wh(100%, auto);
        background-color: #fff;
        ul{
          li{
            @include wh(100%, auto);
            @include flex(row, flex-start, center);
            padding: 24px;
            box-sizing: border-box;
            border-bottom: 1px solid #E0E0E0;
            .item {
              margin-left: 24px;
              color: #666;
              line-height: 40px;
              h3{
                font-size: 28px;
                color: #333;
              }
            }
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
