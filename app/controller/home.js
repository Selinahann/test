'use strict';

// const fs = require('fs');
// const path = require('path');
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const { callback } = ctx.query
    const banner = await ctx.service.home.banner();
    const hot_banner = await ctx.service.home.hot_banner();
    const nav_test = await ctx.service.home.nav_test();
    if (callback) {
      ctx.set('content-type', 'application/javascript; charset=UTF-8')
      ctx.body = callback + '('+ JSON.stringify(
      {
        code: 1,
        data:{
          banner,
          nav_test,
          hot_banner,
        }
      }) + ')'
    } else {
      ctx.body = {
        code: 1,
        data:{
          banner,
          nav_test,
          hot_banner,
        }
      }
    }
  }

  async nav_test() {
    // const content = fs.readFileSync(path.resolve(__dirname, '../public/mall_nav.json'), 'utf-8');
    // const navJson = JSON.parse(content);
    // for (let i = 0; i < navJson.length; i++) {
    //   const item = navJson[i];
    //   await this.app.mysql.insert('mall_nav', {
    //     id: i,
    //     image: item.floorCellData.imgUrl,
    //     text: item.floorCellData.title
    //   })
    // }
  }
}

module.exports = HomeController;
