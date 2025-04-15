import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TransactionChart = ({ transactions }) => {
  const data = {
    labels: transactions.map((transaction) => transaction.category),
    datasets: [
      {
        label: 'Expenses',
        data: transactions
          .filter((transaction) => transaction.type === 'expense')
          .map((transaction) => transaction.amount),
        borderColor: 'red',
        fill: false,
      },
      {
        label: 'Income',
        data: transactions
          .filter((transaction) => transaction.type === 'income')
          .map((transaction) => transaction.amount),
        borderColor: 'green',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h3>Spending Patterns</h3>
      <Line data={data} />
    </div>
  );
};

export default TransactionChart;
