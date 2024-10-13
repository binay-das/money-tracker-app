const express = require('express');
const router = express.Router();
const transactionModel = require('../models/transaction');

router.post('/transactions', async (req, res) => {
    const { name, amount, dateTime, description } = req.body;
    const newTransaction = await transactionModel.create({ name, amount, dateTime, description });
    res.json(newTransaction);
    console.log('New transaction added:', newTransaction);

})
router.get('/transactions', async (req, res) => {
    const transactions = await transactionModel.find({});
    res.json(transactions);
});

router.delete('/transaction/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTransaction = await transactionModel.findByIdAndDelete(id);

        if (!deleteTransaction) {
            return res.status(404).json({ message: 'Transaction not found!' });
        }

        res.status(200).json({ message: 'Transaction deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: 'Server error while deleting transaction!', error });
    }
})

module.exports = router;