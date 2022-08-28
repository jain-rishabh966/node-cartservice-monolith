const cartsServices = require('../services/carts.service');
const responseHandler = require('../utils/responseHandler');

const cartsController = {
  /**
   * This will create a new dummy cart for the user
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFuction} next
   */
  create: (req, res, next) => {
    try {
      const { userId } = req.body;
      const response = cartsServices.createNewCart(userId);
      responseHandler(res, 200, response.message, response.data);
    } catch (error) {
      next(error);
    }
  },

  /**
   * This will show the current cart state
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFuction} next
   */
  listItems: (req, res, next) => {
    try {
      const { cartId } = req.params;
      const response = cartsServices.listItemsInCart(cartId);
      responseHandler(res, 200, response.message, response.data);
    } catch (error) {
      next(error);
    }
  },

  /**
   * This will add a new item to the cart
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFuction} next
   */
  addItem: (req, res, next) => {
    try {
      const { cartId, itemId } = req.body;
      const response = cartsServices.addItemInCart(cartId, itemId);
      responseHandler(res, 200, response.message, response.data);
    } catch (error) {
      next(error);
    }
  },

  /**
   * This will remove an item from the cart
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFuction} next
   */
  removeItem: (req, res, next) => {
    try {
      const { cartId, productId } = req.body;
      const response = cartsServices.removeItemInCart(cartId, productId);
      responseHandler(res, 200, response.message, response.data);
    } catch (error) {
      next(error);
    }
  },

  /**
   * This will finalize the cart for the user
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFuction} next
   */
  checkout: (req, res, next) => {
    try {
      const { cartId } = req.params;
      const response = cartsServices.checkoutCart(cartId);
      responseHandler(res, 200, response.message, response.data);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = cartsController;
