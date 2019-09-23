import {Service} from 'egg'
import {CreateOptions} from 'sequelize'

export default class ProductService extends Service {
  async index() {
    const {ctx} = this
    return ctx.model.Product.findAll({})
  }

  async create(product: CreateOptions) {
    const {ctx} = this
    return ctx.model.Product.create(product)
  }

  async delete(id: string) {
    const {ctx} = this
    const user = await ctx.model.Product.findByPk(id)
    if (!user) ctx.throw(404, '没有找到该产品！')
    return user!.destroy()
  }

  async update({id, updates}: { id: string, updates: object }) {
    const {ctx} = this
    const user = await ctx.model.User.findByPk(id)
    if (!user) {
      ctx.throw(404, '没有找到该产品')
    }
    return user!.update(updates)
  }
}
