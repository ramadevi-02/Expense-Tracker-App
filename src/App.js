import React from 'react'
import { useState } from 'react'
import './App.css'
import Balance from './resources/Balance'
import ExpenseStatus from './resources/ExpenseStatus'
import NewTransaction from './resources/NewTransaction'
import Transaction from './resources/Transaction'

import { BrowserRouter, Route,Link,Routes } from "react-router-dom";

function App() {
  const[transactions,setTransactions]=useState([]);

  const deleteTransaction=(id)=>{
console.log(id)
setTransactions(transactions.filter(transaction=> transaction.id !==id))

console.log(transactions)
  }

  const addTransaction=(transaction)=>{
    setTransactions(transactions => [transaction, ...transactions]);
    console.log(transaction)

  }

  
  return (
 

    
    <div >
      <BrowserRouter>
       <header >
       <Link to='/'>Home</Link>
      
    
       </header>
       <Routes>
<Route path="/" component={App}></Route>
    </Routes>
       </BrowserRouter>
      
<div className="title">
<div className="content-part1">
  <h1 className="heading"> 
Expense Tracker</h1>  
<Balance transactions={transactions}/>
<ExpenseStatus transactions={transactions}/>
<NewTransaction  addTransaction={addTransaction}/></div>

<div className="content-part2" >
  <Transaction transactions={transactions} deleteTransaction={deleteTransaction}/>
</div>
</div>


<footer> <h6>YOLO</h6>
  
</footer>
</div>

   
  )
}

export default App
