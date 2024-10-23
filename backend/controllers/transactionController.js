const transactionModel = require('../models/transaction');

const getTransactions = async (req, res) => {
    const transactions = await transactionModel.find({});
    res.json(transactions);
}

const createTransaction = async (req, res) => {
    try {
        const { name, amount, dateTime, description } = req.body;
        if (!name || !amount || !dateTime || !description) {
            return res.status(400).json({ message: 'Please provide all required fields!' });
        }
        if (isNaN(amount) || amount < 0) {
            return res.status(400).json({ message: 'Invalid amount or amount is less than 0!' });
        }
        const newTransaction = await transactionModel.create({
            name, amount, dateTime, description
        });
        res.status(201).json(newTransaction);

    } catch (error) {
        res.status(500).json({ message: 'Error adding transaction.', error });
    }
}

const deleteTransaction = async (req, res) => {
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
}


module.exports = {
    getTransactions,
    createTransaction,
    deleteTransaction
};