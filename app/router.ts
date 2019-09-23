import {Application} from 'egg'

export default (app: Application) => {
  const {controller, router} = app
  router.get('/', controller.home.test)
  router.resources('product', '/product', controller.product)
};
