const express = require('express');
const router = express.Router();

const {
  listProductById, listProducts, addProduct, removeProduct, updateProduct,
} = require('../src/controllers/products.controller');

router.get('/', (req, res, next) => {
  if (req.query.productId) listProductById(req, res, next);
  else listProducts(req, res, next);
});

router.post('/', addProduct);
router.delete('/', removeProduct);
router.patch('/', updateProduct);

module.exports = router;
