const Service = require('egg').Service;

class TreeService extends Service {
  async tree() {
    const data = await this.app.mysql.select('category');
    function setTreeData (arr) {
      arr.forEach(item => {
        delete item.children
      })
      const map = {}
      arr.forEach(item => {
        map[item.categoryId] = item
      })
      const treeData = []
      arr.forEach(child => {
        const mapItem = map[child.parentId]
        if (mapItem) {
          (mapItem.children || (mapItem.children = [])).push(child)
        } else {
          treeData.push(child)
        }
      })
      return treeData
    }
    return setTreeData(data)
  }
}

module.exports = TreeService;
