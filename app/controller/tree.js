'use strict';

const Controller = require('egg').Controller;

class TreeController extends Controller {
  async tree () {
    const { ctx } = this;
    const tree = await ctx.service.tree.tree();
    console.log(tree);
    ctx.body = {
      code: 1,
      tree
    }
  }
}

module.exports = TreeController;