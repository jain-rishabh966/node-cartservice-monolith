const paymentsServices = require('../services/payments.service');
const responseHandler = require('../utils/responseHandler');

const paymentsController = {
  /**
   * This will accept payments by the user
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFuction} next
   */
  attemptPayment: (req, res, next) => {
    try {
      const { cartId, paymentInfo } = req.body;
      const response = paymentsServices.createNewPayment(cartId, paymentInfo);
      responseHandler(res, 200, response.message, response.data);
    } catch (error) {
      next(error);  
    }
  },

  /**
   * This will return payment status
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFuction} next
   */
  paymentStatus: (req, res, next) => {
    try {
      const { cartId } = req.body;
      const response = paymentsServices.getPaymentStatus(cartId);
      responseHandler(res, 200, response.message, response.data);
    } catch (error) {
      next(error);  
    }
  },
};

module.exports = paymentsController;
