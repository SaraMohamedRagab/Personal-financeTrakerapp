import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div>
      <h3>Transaction List</h3>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.type} - {transaction.category}: ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
