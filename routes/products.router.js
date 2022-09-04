const express = require('express');
const faker = require('faker');
const ProductService = require('./../services/product.service');

const router = express.Router();
const service = new ProductService();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Im a filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
});

router.post('/', (req, res) => {
  const body = req.body;
  const created = service.create(body);
  res.status(201).json(created);
  console.log(service.products.length)
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updated = service.update(id, body);
  res.json(updated);
});

// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const body = req.body;
//   res.json({
//     message: 'Update',
//     data: body,
//     id
//   });
// });

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deleted = service.delete(id);
  res.json(deleted);
});

module.exports = router;
