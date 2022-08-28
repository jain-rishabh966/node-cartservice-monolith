const express = require('express');
const router = express.Router();

const { attemptPayment, paymentStatus } = require('../src/controllers/payments.controller');

router.post('/', attemptPayment);
router.get('/status', paymentStatus);

module.exports = router;
