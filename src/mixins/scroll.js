export default {
  mounted () {
    window.addEventListener('scroll', this.scroll, false)
  },
  destroyed () {
    window.addEventListener('scroll', this.scroll, false)
  },
  methods: {
    scroll () {
      const windowHeight = window.innerHeight
      const pageHeight = document.body.scrollHeight
      const scrollTop = document.querySelector('html').scrollTop
      if (pageHeight - scrollTop < windowHeight + 10) {
        this.$options.scrollBottom.call(this)
      }
    }
  }
}
