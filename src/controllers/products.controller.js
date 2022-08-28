const Product = require('../entities/Product');
const productsServices = require('../services/products.service');
const responseHandler = require('../utils/responseHandler');

const productsController = {
  /**
   * This will list all the products
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFuction} next
   */
  listProducts: (req, res, next) => {
    try {
      const response = productsServices.getAllProducts();
      responseHandler(res, 200, response.message, response.data);
    } catch (error) {
      next(error);
    }
  },

  /**
   * This will list product by id
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFuction} next
   */
   listProductById: (req, res, next) => {
    try {
      const { productId } = req.query;
      const response = productsServices.getProductById(productId);
      responseHandler(res, 200, response.message, response.data);
    } catch (error) {
      next(error);
    }
  },

  /**
   * This will add a new product to listing
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFuction} next
   */
   addProduct: (req, res, next) => {
    try {
      /**
       * @type {{productInfo: Product}}
       */
      const { productInfo } = req.body;
      const response = productsServices.addNewProduct(productInfo);
      responseHandler(res, 200, response.message, response.data);
    } catch (error) {
      next(error);
    }
  },

  /**
   * This will update existing product to listing
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFuction} next
   */
  updateProduct: (req, res, next) => {
    try {
      /**
       * @type {{productInfo: Product;productId:Number}}
       */
      const { productId, productInfo } = req.body;
      const response = productsServices.updateProductInfo(productId, productInfo);
      responseHandler(res, 200, response.message, response.data);
    } catch (error) {
      next(error);
    }
  },

  /**
   * This will remove a product from listing
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFuction} next
   */
  removeProduct: (req, res, next) => {
    try {
      const { productId } = req.body;
      const response = productsServices.removeProduct(productId);
      responseHandler(res, 200, response.message, response.data);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = productsController;
