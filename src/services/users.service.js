const db = require("../sampleDb");

module.exports = {
  userLogin: (username, password) => {
    const [user] = db.users.filter(e => e && e.username === username && e.password === password);

    if (user) {
      db.activeUserSessions.add(db.users.indexOf(user));
    }

    return {
      message: 'OK',
      data: user,
    }
  },

  userLogout: (userId) => {
    db.activeUserSessions.delete(userId);

    return {
      message: 'OK',
      data: {},
    }
  },
};
