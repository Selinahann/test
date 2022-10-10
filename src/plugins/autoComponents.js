export default (Vue) => {
  const files = require.context('@/components', true, /.(vue|js)$/)
  files.keys().forEach(filePath => {
    const file = files(filePath)
    if (filePath.indexOf('.vue') !== -1) {
      const name = file.default.name
      Vue.component(name, file.default)
    } else {
      Vue.use(file.default)
    }
  })
}
