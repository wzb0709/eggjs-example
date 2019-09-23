import { Application } from 'egg';

export interface IProduct {
  id: string,
  title: string,
  description: string,
  create_time: string,
}

export default (app: Application) => {
  const { STRING, DATE, NOW } = app.Sequelize;
  const Product = app.model.define('product',{
    id: { type: STRING(32), allowNull: false, primaryKey: true },
    title: { type: STRING(20), allowNull: false, },
    description: STRING,
    create_time: { type: DATE, allowNull: false, defaultValue: NOW },
  });
  return class extends Product {}
}
