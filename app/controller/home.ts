import { Controller } from 'egg';

export default class HomeController extends Controller {
  async test() {
    this.ctx.body = 'Hello Egg'
  }
}
