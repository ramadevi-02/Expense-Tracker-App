import React from "react";
import "../App.css";

function ExpenseStatus ({transactions}) {
    const amount = transactions.map((transaction) => transaction.amount);
    const income = amount 
    .filter((item) => item > 0)
    .reduce((amount, item) => (amount += item), 0)
    .toFixed(2);
    const expense = (
        amount
        .filter((item) => item < 0)
        .reduce((amount, item) => (amount += item), 0)
        .toFixed(2)* -1
    ).toFixed(2);
    return(
            <div className="ex-status">
                <div>
                    <h3>Income</h3>
                    <div style={{ color: "green" }}>₹{income}</div>
                </div>
                <div>
                    <h3>Expenses</h3>
                    <div style={{ color: "red" }}>₹{expense}</div>
                </div>
            </div>
        );
    }


export default ExpenseStatus;