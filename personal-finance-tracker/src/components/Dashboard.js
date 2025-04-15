import React from 'react';

const Dashboard = ({ income, expenses, savings }) => {
  return (
    <div>
      <h3>Dashboard</h3>
      <p>Total Income: ${income}</p>
      <p>Total Expenses: ${expenses}</p>
      <p>Net Savings: ${savings}</p>
    </div>
  );
};

export default Dashboard;
