const Cart = require("./entities/Cart");
const User = require("./entities/User");
const Product = require("./entities/Product");

module.exports = {
  listOfProducts: [
    new Product('A', 10.99),
    new Product('B', 5.00),
    new Product('C', 1.99),
  ],
  users: [,
    new User('testuser1', 'testpassword1', 'User 1', true),
    new User('testuser2', 'testpassword2', 'User 2'),
  ],
  carts: [
    new Cart([1, 2], 1)
  ],
  activeUserSessions: new Set([]),
};
