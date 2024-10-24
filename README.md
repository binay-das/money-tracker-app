# 💰 Money Tracker App

## 🛠️ Overview  
The **Money Tracker App** is a personal finance tracking system built using **React (Vite)** on the frontend and **Node.js/Express** on the backend. It allows users to seamlessly manage income and expenses with real-time balance updates. The app features light/dark mode toggling, transaction logging, and a well-organized folder structure for scalability.

---


## 🌟 Features

- **Real-Time Balance Tracking:** Automatically updates the balance based on transactions.
- **Add and Manage Transactions:** Add new income/expense entries easily.
- **Transaction History:** View logs of past transactions.
- **Theming Support:** Toggle between light and dark modes for better usability.
- **RESTful API Backend:** Node.js and Express manage CRUD operations for transactions.
- **Vite-Powered Frontend:** Faster builds and hot reloading for better development experience.

---

## 🛠️ Tech Stack

### **Frontend:**
- React (with Vite)
- JavaScript (ES6+)
- CSS Modules
- Material UI (for styling and components)

### **Backend:**
- Node.js with Express
- MongoDB (Mongoose for ORM)
- dotenv (for environment variable management)

---

## 🚀 Installation

### Prerequisites:
- **Node.js** (v14+)
- **MongoDB** installed locally or accessible via MongoDB Atlas

### 1. Clone the Repository:
```bash
git clone https://github.com/binay-das/money-tracker-app.git

cd money-tracker-app
```
### 2. Backend Setup:
```bash
cd backend
npm install
```
## 🗂️ Environment Variables
Create a .env file in the backend folder with the following:

```bash
MONGO_URI=<Enter your Database url here>
PORT=<Enter your server port>
```
Start the backend server:
```bash
npm start
```
### 3. Frontend Setup:
Navigate to the frontend folder and install dependencies:

```bash
cd ../frontend
npm install
```

Start the frontend app:
```bash
npm run dev
```

### 🛠️ Folder Structure
```bash
money-tracker-app/
│
├── backend/
│   ├── controllers/
│   │   └── transactionController.jsx
│   │     
│   ├── models/
│   │   └── transaction.js  
│   │      
│   ├── routes/
│   │   └── transactionRoutes.js  
│   │
│   └── server.js                 
│
│
│
├── frontend
│   ├── public/
│   │   └── image.png            
│   ├── src/
│   │   ├── assets/               
│   │   ├── components/
│   │   │   ├── Balance.jsx       
│   │   │   ├── ThemeToggle.jsx   
│   │   │   ├── TransactionForm.jsx  
│   │   │   └── TransactionLogs.jsx  
│   │   ├── App.css
│   │   ├── App.jsx               
│   │   ├── index.css              
│   │   └── main.jsx 
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html 
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md           
│   └── vite.config.js            
│
├── .env                          
├── .gitignore
├── package-lock.json
├── package.json                                         
└── README.md

```






---
### 🤝 Contribution
Contributions are welcome! Feel free to contribute or provide feedback.