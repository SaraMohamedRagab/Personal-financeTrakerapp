import React, { useState, useEffect } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Dashboard from './components/Dashboard';
import TransactionChart from './components/TransactionChart';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  
  useEffect(() => {
    const savedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    setTransactions(savedTransactions);
  }, []);

  const addTransaction = (transaction) => {
    const updatedTransactions = [...transactions, transaction];
    setTransactions(updatedTransactions);
    localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
  };

  const income = transactions.filter(t => t.type === 'income').reduce((total, t) => total + t.amount, 0);
  const expenses = transactions.filter(t => t.type === 'expense').reduce((total, t) => total + t.amount, 0);
  const savings = income - expenses;

  return (
    <div className="App">
      <h1>Personal Finance Tracker</h1>
      <TransactionForm addTransaction={addTransaction} />
      <Dashboard income={income} expenses={expenses} savings={savings} />
      <TransactionChart transactions={transactions} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default App;
