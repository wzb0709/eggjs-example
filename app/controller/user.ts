import { Controller } from 'egg';

export default class UserController extends Controller {
  async index() {
    const { ctx } = this;
    const productList = await ctx.service.user.index();
    ctx.body = productList;
  }
  async delete() {
    const { ctx } = this
    const id = ctx.helper.parseInt(ctx.params.id)
    await ctx.service.user.delete(id)
    ctx.status = 201
  }
  async update() {
    const { ctx } = this;
    const id = ctx.helper.parseInt(ctx.params.id);
    const body = ctx.request.body;
    ctx.body = await ctx.service.user.update({ id, updates: body });
  }
  async create() {
    const { ctx } = this;
    const user = await ctx.service.user.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = user;
  }
}
