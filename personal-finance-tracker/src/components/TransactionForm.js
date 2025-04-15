import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('expense');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ amount: parseFloat(amount), category, type });
    setAmount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <select value={type} onChange={(e) => setType(e.target.value)} required>
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
