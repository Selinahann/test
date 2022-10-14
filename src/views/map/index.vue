<template>
  <div id="map-page">
    <div id="container"></div>
    <div class="pois">
      <ul>
        <li v-for="(item, index) in pois" :key="index" @click="changeAddress(item)">
          <h4>{{item.name}}</h4>
          <p>{{item.address}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import AMapUI from 'AMapUI'
import AMap from 'AMap'
import storage from '@/utils/storage.js'

export default {
  name: 'map-page',
  data () {
    return {
      pois: []
    }
  },
  mounted () {
    AMapUI.loadUI(['misc/PositionPicker'], (PositionPicker) => {
      const map = new AMap.Map('container', {
        zoom: 16,
        scrollWheel: false
      })
      const positionPicker = new PositionPicker({
        mode: 'dragMap',
        map: map
      })

      positionPicker.on('success', (positionResult) => {
        this.pois = positionResult.regeocode.pois
        console.log(positionResult)
      })
      positionPicker.start()
      map.panBy(0, 1)
    })
  },
  methods: {
    changeAddress (item) {
      this.$root.$emit('changeLocation', item)
      const formData = storage.getItem('addressFormData')
      if (formData) {
        formData.location = item.name
        storage.setItem('addressFormData', formData)
      } else {
        storage.setItem('addressFormData', {
          phone: '',
          name: '',
          address: '',
          location: item.name
        })
      }
      this.$router.push('/edit/address')
    }
  }
}
</script>

<style lang="scss" scoped>
#map-page {
  @include wh(100%, 100vh);
  @include flex(column);
  background-color: #f8f8f8;
  #container {
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 50vh;
    position: relative;
  }
  .pois{
    flex: 1;
    width: 100%;
    padding: 0 24px;
    box-sizing: border-box;
    overflow: auto;
    line-height: 40px;
    ul{
      li{
        padding: 20px 0;
        h4{
          font-size: 28px;
        }
        p{
          font-size: 24px;
          color: #666;
        }
      }
    }
  }
}
</style>
