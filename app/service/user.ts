import {Service} from 'egg'
import {CreateOptions} from 'sequelize'

export default class UserService extends Service {
  async index() {
    const {ctx} = this
    return ctx.model.User.findAll({})
  }

  async create(product: CreateOptions) {
    const {ctx} = this
    return ctx.model.User.create(product)
  }

  async delete(id: number) {
    const {ctx} = this
    const user = await ctx.model.User.findByPk(id)
    if (!user) ctx.throw(404, '没有找到该用户')
    return user!.destroy()
  }

  async update({id, updates}: { id: number, updates: object }) {
    const {ctx} = this
    const user = await ctx.model.User.findByPk(id)
    if (!user) {
      ctx.throw(404, '没有找到该用户')
    }
    return user!.update(updates)
  }
}
