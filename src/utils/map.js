import AMap from 'AMap'

const geolocation = () => {
  return new Promise((resolve, reject) => {
    AMap.plugin('AMap.Geolocation', () => {
      const geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000,
        extensions: 'all',
        GeoLocationFirst: true
      })
      // getCurrentPosition
      geolocation.getCurrentPosition((status, result) => {
        if (status === 'complete') {
          resolve(result)
        } else {
          reject(result)
        }
      })
    })
  })
}

export default {
  geolocation
}
