const Service = require('egg').Service;

class HomeService extends Service {
  async banner() {
    const data = await this.app.mysql.select('banner');
    return data;
  }

  async nav_test() {
    const data = await this.app.mysql.select('mall_nav');
    return data;
  }

  async hot_banner() {
    const data = await this.app.mysql.select('hot_banner');
    return data;
  }
}

module.exports = HomeService;