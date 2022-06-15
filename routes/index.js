const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriasRouter = require('./categorias.router');

function routerApi(app) {
  app.use('/productos', productsRouter);
  app.use('/users', usersRouter);
  app.use('/categorias', categoriasRouter);
}

module.exports = routerApi;
