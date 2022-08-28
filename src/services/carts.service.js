const Cart = require("../entities/Cart");
const Product = require("../entities/Product");
const sampleDb = require("../sampleDb");


const listItemsInCart = (cartId) => {
  /**
   * @type {Product[]}
   */
  const items = [];
  const cart = sampleDb.carts[cartId];

  if (cart) {
    cart.products.forEach(e => items.push(sampleDb.listOfProducts[e]));
  }

  return {
    message: 'OK',
    data: items.filter(e => e.visible),
  }
};

module.exports = {
  createNewCart: (userId) => {
    sampleDb.carts.push(new Cart([], userId));

    return {
      message: 'OK',
      data: {},
    }
  },

  listItemsInCart,

  addItemInCart: (cartId, itemId) => {
    if (sampleDb.listOfProducts[itemId] && sampleDb.carts[cartId]) {
      sampleDb.carts[cartId].products.add(itemId);
    }

    console.log(this);

    return listItemsInCart(cartId);
  },

  removeItemInCart: (cartId, productId) => {
    if (sampleDb.listOfProducts[productId] && sampleDb.carts[cartId]) {
      sampleDb.carts[cartId].products.delete(productId);
    }

    return listItemsInCart(cartId);
  },

  checkoutCart: (cartId) => {
    /**
     * @type {Product[]}
     */
    const items = listItemsInCart(cartId).data;

    return {
      message: 'OK',
      data: {
        items,
        total: items.reduce((a, b) => a + b.price, 0),
      },
    }
  },
};
