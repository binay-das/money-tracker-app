const express = require('express');
const router = express.Router();
const transactionModel = require('../models/transaction');

router.post('/transactions', async (req, res) => {
    const {name, amount, dateTime, description} = req.body;
    const newTransaction = await transactionModel.create({name, amount, dateTime, description});
    res.json(newTransaction);
    console.log('New transaction added:', newTransaction);

})
router.get('/transactions', async (req, res) => {
    const transactions = await transactionModel.find({});
    res.json(transactions);
});

module.exports = router;