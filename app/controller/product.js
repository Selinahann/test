'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
  async list() {
    const { ctx } = this;
    const {
      page = 1,
      page_size = 10,
      class_id,
    } = ctx.query;
    const list = await ctx.service.product.select(
    {
      page, 
      page_size,
      class_id
    });
    ctx.body = {
      code: 1,
      data:list.map(item => {
        return {
          ...item,
          images: JSON.parse(item.images)[0],
          promotionInfoList: JSON.parse(item.promotionInfoList)
        }
      })
    }
  }
}

module.exports = ProductController;