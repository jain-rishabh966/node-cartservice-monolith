module.exports = class Cart {
  /**
   * @param {Number[]} products
   * @param {Number} userId
   */
  constructor (products, userId) {
    this.products = new Set(products);
    this.userId = userId;
    this.paymentSuccess = false;
    this.paymentAttempted = false;
  }

  setPaymentSuccess() {
    this.setPaymentAttempted();
    this.paymentSuccess = true;
  }

  setPaymentAttempted() {
    this.paymentAttempted = true;
  }
}
