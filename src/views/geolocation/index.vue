<template>
  <div id="geolocation"></div>
</template>

<script>
import map from '@/utils/map'
export default {
  name: 'geolocation-page',
  mounted () {
    map.geolocation().then(res => {
      const data = res.addressComponent
      console.log(data)
      this.$store.commit('user/SET_ADDRESS', {
        contry: data.contry,
        district: data.district,
        province: data.province,
        street: data.street,
        formattedAddress: res.formattedAddress
      })
      const callbackUrl = this.$route.query.callback || '/home'
      this.$router.replace(callbackUrl)
    }).catch((e) => {
      this.$router.replace('/address')
    })
  }
}
</script>

<style lang="scss" scoped>
#geolocation{
  @include wh(100vw, 100vh);
  background: url(@/assets/image/addressing.png) no-repeat;
  background-size: cover;
}
</style>
