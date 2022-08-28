const sampleDb = require("../sampleDb");

module.exports = {
  createNewPayment: (cartId, paymentInfo) => {
    const cart = sampleDb.carts[cartId];
    paymentInfo;
    
    if (cart) cart.setPaymentSuccess();

    return {
      message: 'OK',
      data: {},
    };
  },

  getPaymentStatus: (cartId) => {
    const cart = sampleDb.carts[cartId];

    if (cart) {
      return {
        message: 'OK',
        data: {
          paymentStatus: cart.paymentSuccess ?
            'SUCCESS':
            cart.paymentAttempted ? 'FAILED' : 'PENDING',
        }
      }
    }

    return {
      message: 'OK',
      data: {},
    }
  },
};
