const express = require('express');
const router = express.Router();

const { login, logout } = require('../src/controllers/users.controller');

router.post('/login', login);
router.post('/logout', logout);

module.exports = router;
