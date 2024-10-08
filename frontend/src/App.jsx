import { useEffect, useState } from 'react';
import './App.css'
import { config } from 'dotenv';
import ThemeToggle from './components/ThemeToggle';
import Balance from './components/Balance';
import TransactionForm from './components/TransactionForm';
import TransactionLogs from './components/TransactionLogs';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // const url = process.env.REACT_API_URL;
  //   const url = 'http://localhost:8080/api/transactions';

  //   const transactionAmount = isIncome ? amount : -Math.abs(amount);

  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ name, amount: transactionAmount, dateTime, description }),
  //   }).then(res => {
  //     res.json().then(jsonData => {
  //       console.log('Transaction added:', jsonData);

  //       setName('');
  //       setAmount(0);
  //       setDateTime('');
  //       setDescription('');

  //       fetchTransactions();
  //     });
  //   });
  //   // console.log('New transaction added:', {name, dateTime, description});
  // }

  const fetchTransactions = async () => {
    const data = await fetch('http://localhost:8080/api/transactions', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const jsonData = await data.json();
    setTransactions(jsonData);
    console.log(transactions);
  }

  const addTransaction = async (transaction) => {
    const url = 'http://localhost:8080/api/transactions';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(transaction)

    }).then(() => fetchTransactions());
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  }

  useEffect(() => {
    fetchTransactions()

  }, []);

  useEffect(() => {
    const body = document.body;

    if (isDarkMode) {
      body.style.backgroundColor = '#333';
      body.style.color = '#fff';
    } else {
      body.style.backgroundColor = '#ddd';
      body.style.color = '#000';
    }

  }, [isDarkMode]);


  return (
    <>
        <div className={isDarkMode? 'dark-mode' : 'light-mode'}>
          <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <Balance transactions={transactions} />
          <TransactionForm addTransaction={addTransaction} />
          <TransactionLogs transactions={transactions} />
        </div>
    </>
  )
}

export default App
