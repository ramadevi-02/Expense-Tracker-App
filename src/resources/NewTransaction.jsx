import React, { useState } from "react";
import "../App.css";

function NewTransaction({ addTransaction }) {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [creditDebit, setCreditDebit] = useState('');

  const newTransaction = (e) => {
    e.preventDefault();

    if (text && amount && creditDebit) {
      const transaction ={
        id: Math.floor(Math.random() * 100000000),
        text:text,
        amount:creditDebit === "Debit" ? -Math.abs(amount) : Math.abs(amount),

      };
    
      addTransaction(transaction);
      setText('');
      setAmount('');
      setCreditDebit('');
    } else {
      alert("Please fill the all fields");
    }
  };
  return (
    <div className="newtransaction">
      <h2> New Transaction</h2>

      <input
        value={text}
        className="floating-label"
        type="text"
        placeholder="Enter Transaction Name"
        onChange={(e) => setText(e.target.value)}
      />
      <input
        value={amount}
        className="number-input"
        type="number"
        placeholder="Total Amount"
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        onChange={(e) => setCreditDebit(e.target.value)}
        value={creditDebit}
        required
      >
        <option value="">Enter Credit/Debit</option>
        <option value="Credit">Credit</option>
        <option value="Debit">Debit</option>
      </select>
      <input
        className="transaction-button"
        onClick={newTransaction}
        type="submit"
        value="Add New Transaction"
      />

      <button
        className="transaction-button"
        onClick={() => (setText(""), setAmount(""), setCreditDebit(""))}
      >
        Reset
      </button>
    </div>
  );
}

export default NewTransaction;
