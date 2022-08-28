const Product = require("../entities/Product");
const sampleDb = require("../sampleDb");

module.exports = {
  getAllProducts: () => {
    const products = sampleDb.listOfProducts;
    return {
      message: 'OK',
      data: products
        .filter(e => e.visible)
        .map(e => ({
          name: e.name,
          price: e.price,
        })),
    };
  },

  /**
   * @param {Number} productId
   */
  getProductById: (productId) => {
    let product = null;

    if (sampleDb.listOfProducts[productId]) {
      const { name, price } = sampleDb.listOfProducts[productId];
      product = { name, price };
    }

    return {
      message: 'OK',
      data: product,
    };
  },

  /**
   * @param {Product} productInfo
   */
  addNewProduct: (productInfo) => {
    const product = new Product(productInfo.name, productInfo.price);
    sampleDb.listOfProducts.push(product);

    return {
      message: 'OK',
      data: productInfo,
    };
  },

  /**
   * @param {Number} productId 
   * @param {Product} productInfo 
   */
  updateProductInfo: (productId, productInfo) => {
    if (sampleDb.listOfProducts[productId]) {
      const product = new Product(productInfo.name, productInfo.price);
      sampleDb.listOfProducts[productId] = product;
    }

    return {
      message: 'OK',
      data: productInfo,
    };
  },

  /**
   * @param {Number} productId
   */
  removeProduct: (productId) => {
    if (sampleDb.listOfProducts[productId]) {
      sampleDb.listOfProducts[productId].delistProduct();
    }

    return {
      message: 'OK',
      data: {},
    };
  },
};
