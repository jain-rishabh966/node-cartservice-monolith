module.exports = class Product {
  /**
   * @param {String} name
   * @param {Number} price
   */
  constructor(name, price) {
    this.price = price;
    this.name = name;
    this.visible = true;
  }

  delistProduct() {
    this.visible = false;
  }
}
