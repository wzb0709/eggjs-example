import {Application} from 'egg'

export default (app: Application) => {
  const {INTEGER, STRING, DATE} = app.Sequelize
  const User = app.model.define('user', {
    id: {type: INTEGER, primaryKey: true, autoIncrement: true},
    name: STRING(8),
    password: STRING(18),
    email: STRING(20),
    created_at: DATE,
    updated_at: DATE,
  })
  return class extends User {
  }
}
