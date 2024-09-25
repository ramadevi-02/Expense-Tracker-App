import React from "react";
function DisplayTransaction({transaction, deleteTransaction}){
    const color = transaction.amount >= 0? "green" : "red";
    return (
        <div className="display-items"
        style={{background: color, color:"#fff"}}>

        <div>
        <h5>{transaction.text}</h5>
              </div>
              <div>
                <h5>{transaction.amount}</h5>
              </div>
              <div>
                <button className="delte-button" onClick={() => deleteTransaction(transaction.id)}
                >🗑️</button>
                </div>

              </div>
    );
}

export default DisplayTransaction;