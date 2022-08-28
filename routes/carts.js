const express = require('express');

const {
  addItem, removeItem, listItems, checkout, create,
} = require('../src/controllers/carts.controller');

const router = express.Router();

router.post('/', create);

router.get('/:id', listItems);
router.post('/add', addItem);
router.delete('/remove', removeItem);
router.post('/checkout/:id', checkout);

module.exports = router;
