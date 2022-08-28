/**
 * @param {Response} res
 * @param {Number} statusCode
 * @param {String} message
 * @param {any} data
 */
module.exports = function castResponse(res, statusCode, message, data) {
  return res
    .status(statusCode)
    .json({
      success: `${statusCode}`.startsWith(2),
      message,
      data,
    });
};
