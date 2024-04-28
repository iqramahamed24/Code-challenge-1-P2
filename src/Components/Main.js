import React from "react";

const TransactionTable = ({ transactions }) => {
  return (
    <div>
      <h2>Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Descriptions</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
              <tr key={transactions.id}>
                <td>{transactions.date}</td>
                <td> {transactions.description} </td>
                <td> {transactions.category} </td>
                <td> {transactions.amount} </td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
