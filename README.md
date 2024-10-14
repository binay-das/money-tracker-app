# 💰 Money Tracker App

## 🛠️ Overview  
The **Money Tracker App** is a personal finance tracking system built using **React (Vite)** on the frontend and **Node.js/Express** on the backend. It allows users to seamlessly manage income and expenses with real-time balance updates. The app features light/dark mode toggling, transaction logging, and a well-organized folder structure for scalability.

---

## 📋 Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Installation](#installation)  
- [Usage](#usage)  
- [Folder Structure](#folder-structure)  
- [Environment Variables](#environment-variables)  
- [API Documentation](#api-documentation)  
- [Best Practices and Improvements](#best-practices-and-improvements)  
- [License](#license)  
- [Contribution](#contribution)

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
git clone https://github.com/your-username/money-tracker-app.git
cd money-tracker-app
```
### 2. Backend Setup:
```bash
cd backend
npm install
```
Create a .env file in the backend folder:
```bash
MONGO_URI=mongodb://localhost:27017/money-tracker
PORT=5000
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
│   ├── models/
│   │   └── transaction.js        
transactions
│   ├── routes/
│   │   └── transactionRoutes.js  
transactions
│   └── server.js                 
│
├── frontend
│   ├── public/
│   │   └── index.html            
│   ├── src/
│   │   ├── assets/               
│   │   ├── components/
│   │   │   ├── Balance.jsx       
│   │   │   ├── ThemeToggle.jsx   
│   │   │   ├── TransactionForm.jsx  
│   │   │   └── TransactionLogs.jsx  
│   │   ├── App.jsx               
│   │   ├── main.jsx              
│   │   └── index.css             
│   └── vite.config.js            
│
├── .env                          
├── .gitignore                    
├── README.md                     
└── package.json                  
```

## 🗂️ Environment Variables
Create a .env file in the backend folder with the following:

```bash
MONGO_URI=mongodb://localhost:27017/money-tracker
PORT=5000
```

## 📚 API Documentation
```bash
Base URL:
http://localhost:5000/api
```

Endpoints:
```bash
GET /api/transactions
Retrieves all transactions.

POST /api/transactions
Creates a new transaction.
Request Body:
```
```bash
{
  "amount": 1000,
  "description": "Salary",
  "type": "income"
}
```

## 3. DELETE /api/transactions/

Deletes a transaction by ID.

---

## 🛡️ Best Practices and Improvements
- **Linting:** Use ESLint to maintain code consistency.
- **Error Handling:** Add more detailed error messages and HTTP status codes.
- **Testing:** Implement unit and integration tests (e.g., Jest, Mocha).
- **Authentication:** Add user authentication for better privacy and data security.
- **CI/CD:** Integrate GitHub Actions for automated testing and deployment.

--- 

### 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
---
### 🤝 Contribution
Contributions are welcome! Please follow these steps to contribute:

- 1. Fork the project.
- 2. Create a new branch (git checkout -b feature-branch).
- 3. Commit your changes (git commit -m 'Add some feature').
- 4. Push to the branch (git push origin feature-branch).
- 5. pen a Pull Request.

---

### 🎯 Usage
- 1. Add your income and expense transactions via the form.
- 2. View real-time updates in your balance.
- 3. Switch between light and dark modes using the theme toggle.

---

### 🎉 Conclusion
This project demonstrates the basics of full-stack web development with a focus on simplicity and usability. Feel free to contribute or use it as a base for your personal finance projects!