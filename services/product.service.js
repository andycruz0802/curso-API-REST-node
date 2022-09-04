const faker = require('faker');


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
      });
    }
  }

  create(body = {}) {
    this.products.push({
      id: this.products.length,
      name: body?.name,
      price: body?.price,
      image: body?.image
    })

    return {
      message: 'Producto creado.',
      data: body,
      id: this.products.length
    }
  }

  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find(item => item.id === id);
  }

  update(id, body = {}) {
    const index = this.products.findIndex(item => +item.id === +id);
    this.products[index].name = body?.name;
    this.products[index].price = body?.price;
    this.products[index].image = body?.image;
    return this.products[index];
  }

  delete(id) {
    const index = this.products.findIndex(item => +item.id === +id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return {message: `Producto con id ${id} eliminado.`}
    }
    return {message: `El producto con id ${id} no existe.`}
  }
}

module.exports = ProductService;
