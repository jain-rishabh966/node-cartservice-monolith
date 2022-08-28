const usersServices = require('../services/users.service');
const responseHandler = require('../utils/responseHandler');

const usersController = {
  /**
   * This will create a new dummy session for the user
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFuction} next
   */
  login: (req, res, next) => {
    try {
      const { username, password } = req.body;
      const response = usersServices.userLogin(username, password);
      responseHandler(res, 200, response.message, response.data);
    } catch (error) {
      next(error);  
    }
  },

  /**
   * This will destroy existing dummy session for the user
   *
   * @param {Request} req
   * @param {Response} res
   * @param {NextFuction} next
   */
  logout: (req, res, next) => {
    try {
      const { userId } = req.body;
      const response = usersServices.userLogout(userId);
      responseHandler(res, 200, response.message, response.data);
    } catch (error) {
      next(error);  
    }
  },
};

module.exports = usersController;
