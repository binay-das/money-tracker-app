import { useEffect, useState } from 'react';
import { TextField, Button, Grid, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

export default function TransactionForm({ addTransaction }) {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [isIncome, setIsIncome] = useState(true);
    const [dateTime, setDateTime] = useState('');
    const [description, setDescription] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleAmount = (e) => {
        // setAmount(e.target.value);
        setAmount(Number(e.target.value));
    }
    const handleIsIncome = (e) => {
        setIsIncome(e.target.value === 'credit');
    }
    const handleDateTime = (e) => {
        setDateTime(e.target.value);
    }
    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const transactionAmount = isIncome ? amount : -Math.abs(amount);

        addTransaction({
            name,
            amount: transactionAmount,
            dateTime,
            description
        });

        setName('');
        setAmount(0);
        setDateTime('');
        setDescription('');
    }


    return (
        <form onSubmit={handleSubmit} style={{
            // width: '100%',
            marginTop: '16px'
        }}>

            <input type="text" value={name} onChange={handleName} placeholder='New transaction' />
            <div className="middle">
                <select onChange={handleIsIncome}>
                    <option value="credit">Credit (+)</option>
                    <option value="debit">Debit (-)</option>
                </select>
                <input type="number" value={amount} onChange={handleAmount} placeholder='Amount' />
                <input type="datetime-local" value={dateTime} onChange={handleDateTime} />

            </div>

            <input type="text" value={description} onChange={handleDescription} placeholder='Description' />

            <button type='submit'>Add new transaction</button>
        </form>
    );
}