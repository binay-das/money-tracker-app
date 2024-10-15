# 💰 Money Tracker App – Frontend (Built using React + Vite )
 
This is the **frontend** of the Money Tracker App, built with **React (Vite)**. It allows users to manage their income and expenses, view transaction history, and switch between light and dark modes for better usability. The frontend consumes a RESTful API to manage transactions and provides a seamless user experience.

---

## 🌟 Features  
- **Add Transactions:** Add income and expense entries.  
- **Transaction History:** View a log of all past transactions.  
- **Real-time Balance:** Automatically updates the balance based on transactions.  
- **Dark/Light Mode:** Easily toggle between light and dark themes.  
- **API Integration:** Connects to a backend REST API for data persistence. 


---

## 🎯 Usage
- Add **new transactions** (income or expense) using the transaction form.
- See the **real time balance**.
- View the **transaction history** with detailed entries.
- **Delete a transaction** (the balance gets updated with it).
- **Toggle theme** between light and dark modes for a seamless user experience.

## 🗂️ Folder Structure

```bash
frontend/
│
├── public/               
│   └──          
│
├── src/  
│   ├── assets/           
│   ├── components/  
│   │   ├── Balance.jsx              
│   │   ├── ThemeToggle.jsx        
│   │   ├── TransactionForm.jsx    
│   │   └── TransactionLogs.jsx         
│   ├── App.css
│   ├── App.jsx           
│   ├── index.css         
│   └── main.jsx          
│
├── .gitignore
├── eslint.config.js  
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js

``` 