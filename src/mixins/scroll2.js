export default {
  mounted () {
    if (this.$options.scrollBottom) {
      window.addEventListener('scroll', this.scroll, false)
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.scroll, false)
  },
  activated () {
    if (this.$options.scrollBottom) {
      window.addEventListener('scroll', this.scroll, false)
    }
  },
  deactivated () {
    window.removeEventListener('scroll', this.scroll, false)
  },
  methods: {
    scroll () {
      const windowHeight = window.innerHeight
      const pageHeight = document.body.clientHeight
      const scrollTop = document.querySelector('html').scrollTop
      // console.log(windowHeight, pageHeight-scrollTop);
      if (pageHeight - scrollTop < windowHeight + 10) {
        this.$options.scrollBottom.call(this)
      }
    }
  }
}