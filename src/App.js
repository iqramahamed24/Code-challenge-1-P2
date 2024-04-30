import React, { useState, useEffect } from "react";
import SearchButton from "./Components/SearchButton";
import TransactionForm from "./Components/TransactionForm";
import TransactionTable from "./Components/TransactionTable";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filterTerm, setFilterTerm] = useState('');

  useEffect(() => {
    const responseData = [
      {
        date: "2024-03-30",
        description: "Paycheck from Bob",
        category: "Income",
        amount: 10000,
      },
      {
        date: "2024-03-29",
        description: "Cj's Restuarant",
        category: "Food",
        amount: 1050,
      },
      {
        date: "2024-03-28",
        description: "Sunglasses",
        category: "Fashion",
        amount: 380,
      },
      {
        date: "2024-03-27",
        description: "Cinema",
        category: "Outing",
        amount: 1050,
      },
      {
        date: "2024-03-26",
        description: "Quickmart",
        category: "Shopping",
        amount: 2000,
      },
      {
        date: "2024-03-25",
        description: "Skating",
        category: "Outing",
        amount: 2000,
      },
    ];
    setTransactions(responseData);
  }, []);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div>
      <h1 className="header">The Royal Bank Of Flatiron</h1>
      <div className="search-container">
        <SearchButton setFilterTerm={setFilterTerm} />
      </div>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <div className="transaction-table-container">
        <TransactionTable transactions={transactions} filterTerm={filterTerm} />
      </div>
    </div>
  );
}

export default App;
