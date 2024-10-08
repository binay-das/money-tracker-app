const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    dateTime: {
        type: Date,
        default: Date.now,
        
    },
    description: {
        type: String,
        required: true
    },
});

const transactionModel = mongoose.model('Transaction', transactionSchema);
module.exports = transactionModel;