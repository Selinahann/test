const Service = require('egg').Service;

class ProductService extends Service {
  async select({page, page_size, class_id}) {
    const data = await this.app.mysql.select('product', {
      where: {
        class_id: class_id,
      },
      limit: page_size * 1,
      offset: (page - 1) * page_size
    });
    return data;
  }
}

module.exports = ProductService;