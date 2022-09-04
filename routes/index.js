const express = require('express');

const { logErrors, errorHandler, boomErrorHandler } = require('./../middlewares/error.handler')

const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriasRouter = require('./categorias.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/productos', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categorias', categoriasRouter);

  app.use(logErrors);
  app.use(boomErrorHandler);
  app.use(errorHandler);
}


module.exports = routerApi;
