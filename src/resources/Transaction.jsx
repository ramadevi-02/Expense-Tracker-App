import React from "react";
import DisplayTransaction from "./DisplayTransaction";

function Transaction ({transactions, deleteTransaction}) {
    return (
        <div className="transaction">
            <h2>Transaction History</h2>
            <ul>
                {transactions.map((transaction) => {
                    return (
                        <DisplayTransaction
                        key={transaction.id}
                        transaction={transaction}
                        deleteTransaction={deleteTransaction}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default Transaction;
