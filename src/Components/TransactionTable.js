import React from "react";

const TransactionTable = ({transactions, filterTerm})=> {
const filteredTransactions = transactions.filter(transaction => 
transaction.description.toLowerCase().includes(filterTerm.toLowerCase())
);

  return (
    <div className="transaction-table-container" >
      <h2>Transactions</h2>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
