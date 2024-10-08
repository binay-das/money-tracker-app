const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const transactionModel = require('./models/transaction');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
})

app.use(cors());
app.use(express.json());

app.get('/api/test', (req, res) => {
    res.json({ message: 'API is working fine!' });
})

app.post('/api/transactions', async (req, res) => {
    const {name, amount, dateTime, description} = req.body;
    const newTransaction = await transactionModel.create({name, amount, dateTime, description});
    res.json(newTransaction);
    console.log('New transaction added:', newTransaction);
})

app.get('/api/transactions', async (req, res) => {
    const transactions = await transactionModel.find({});
    res.json(transactions);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});

