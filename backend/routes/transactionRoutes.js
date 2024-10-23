const express = require('express');
const router = express.Router();
const { getTransactions, createTransaction, deleteTransaction } = require('../controllers/transactionController');

router.route('/transactions').get(getTransactions).post(createTransaction);

router.delete('/transaction/:id', deleteTransaction);

module.exports = router;