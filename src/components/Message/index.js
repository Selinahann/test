import MessageComponent from './Message.vue'

export default (Vue) => {
  Vue.prototype.$message = {
    info (msg) {
      const Component = Vue.extend(MessageComponent)
      const message = new Component({
        propsData: {
          msg,
          type: 'info'
        }
      })
      message.$mount()
      document.body.appendChild(message.$el)
    },
    success (msg) {
      const Component = Vue.extend(MessageComponent)
      const message = new Component({
        propsData: {
          msg,
          type: 'success'
        }
      })
      message.$mount()
      document.body.appendChild(message.$el)
    },
    error (msg) {
      const Component = Vue.extend(MessageComponent)
      const message = new Component({
        propsData: {
          msg,
          type: 'error'
        }
      })
      message.$mount()
      document.body.appendChild(message.$el)
    }
  }
}
