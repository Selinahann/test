module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/assets/scss/_base.scss";'
      },
      postcss: {
        plugins: [
          // 需要下载postcss-loader@3
          //"postcss-pxtorem": "^5.1.1"
          require('postcss-pxtorem')({
            rootValue: 100,
            propList: ['*']
          }),
         // 需要下载"autoprefixer": "^9.8.6",
          require('autoprefixer')
        ]
      }
    }
  },
  configureWebpack: {
    externals: {
      AMap: 'AMap',
      AMapUI: 'AMapUI'
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7001',
        changeOrigin: true
      }
    }
  }
}
