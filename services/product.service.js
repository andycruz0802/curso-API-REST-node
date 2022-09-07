const faker = require('faker');
const boom = require('@hapi/boom');

class ProductService {

  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: i,
        name: faker.commerce.productName(),
        price: +(faker.commerce.price()),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean()
      });
    }
  }

  async create(body = {}) {
    this.products.push({
      id: this.products.length,
      name: body?.name,
      price: body?.price,
      image: body?.image
    })

    return {
      message: 'Producto creado.',
      data: body,
      id: this.products.length - 1
    }
  }

  async find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 2000);
    })
  }

  async findOne(id) {
    const product = this.products.find(item => +item.id === +id);
    if (!product) {
      throw boom.notFound('Product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('Product is blocked');
    }
    return product;
  }

  async update(id, body = {}) {
    const index = this.products.findIndex(item => +item.id === +id);
    if (index === -1) {
      throw boom.notFound('Product not found');
    }
    this.products[index] = {
      ...this.products[index],
      ...body
    }
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex(item => +item.id === +id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return {message: `Producto con id ${id} eliminado.`}
    }
    return {message: `El producto con id ${id} no existe.`}
  }
}

module.exports = ProductService;
