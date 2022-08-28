module.exports = class User {
  /**
   * @param {String} username
   * @param {String} password
   * @param {String} name
   * @param {Boolean} admin
   */
  constructor(username, password, name, admin = false) {
    this.username = username;
    this.password = password;
    this.name = name;
    this.admin = admin;
  }
}
