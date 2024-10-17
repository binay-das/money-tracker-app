import { useEffect, useState } from 'react';
import './App.css'
import ThemeToggle from './components/ThemeToggle';
import Balance from './components/Balance';
import TransactionForm from './components/TransactionForm';
import TransactionLogs from './components/TransactionLogs';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(
    () => JSON.parse(localStorage.getItem('isDarkMode')) || false
  );

  const fetchTransactions = async () => {
    try {
      const data = await fetch('http://localhost:8080/api/transactions', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (!data.ok) {
        throw new Error('Failed to fetch transactions');
      }

      const jsonData = await data.json();
      setTransactions(jsonData);
      // console.log(transactions);

    } catch (error) {
      console.error('Error fetching transactions:', error);
      alert('Unable to fetch transactions. Please try again later.');
    }
  }

  const addTransaction = async (transaction) => {
    try {
      // const url = 'http://localhost:8080/api/transactions';

      const response = fetch('http://localhost:8080/api/transactions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(transaction)

      });

      if (!response.ok) {
        throw new Error('Failed to add transaction');
      }

      await fetchTransactions();

    } catch (error) {
      
      console.error('Error adding transaction:', error);
      alert('Failed to add transaction. Please try again.');
    }
  }

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('isDarkMode', JSON.stringify(newMode));
      return newMode;
    });
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
      <div className={isDarkMode ? 'dark-mode' : 'light-mode'} >
        <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <Balance transactions={transactions} />
        <TransactionForm addTransaction={addTransaction} />
        <TransactionLogs transactions={transactions} setTransactions={setTransactions} />
      </div>
    </>
  )
}

export default App