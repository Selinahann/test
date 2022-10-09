import Loading from './index.vue'

export default (Vue) => {
  const LoadingClass = Vue.extend(Loading) // 生成组件类
  const LoadingComponent = new LoadingClass() // 生成组件实例
  const div = document.createElement('div')
  document.body.appendChild(div)
  LoadingComponent.$mount(div)
  Vue.prototype.$loading = {
    show () {
      LoadingComponent.show = true
    },
    hide () {
      LoadingComponent.show = false
    }
  }
}
