
import './App.css';
import React from 'react';
import AddTransaction from './components/add';
import { useState } from 'react';


function App() {




  const[transactions, setTransactions]=useState([]);

  const add= (transactionItem, amount, transactionType) =>{
setTransactions((transactions)=>[...transactions, {transactionItem:transactionItem,amount:amount, transactionType:transactionType}] )};
console.log(transactions);
  

  return (
   <div className ="container">
    <AddTransaction add={add} />

    </div>
  );

  }

export default App;
