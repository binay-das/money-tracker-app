const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const transactionRoutes = require('./routes/transactionRoutes');
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

app.use('/api', transactionRoutes);

app.get('/api/test', (req, res) => {
    res.json({ message: 'API is working fine!' });
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});