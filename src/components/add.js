import React from "react"


import { useState } from "react";
function AddTransaction(props){

  const[transactionItem, setTransactionItem]=useState('');
  const [amount, setAmount]= useState('');
  const[transactionType, setTransactionType]=useState('');
  const add =(()=>{
   props.add(transactionItem, amount, transactionType)

  })


  return(
   <div>
   <h1> Add a new transaction</h1>

     <input type="text" placeholder="enter item" onChange={(event)=> setTransactionItem(event.target.value)}/> <br></br>
     <input type="text" placeholder="enter amount"onChange={(event)=> setAmount(event.target.value)}/> <br></br>
     <select onChange={(event)=> setTransactionType(event.target.value)}>
      <option>income</option>
      <option>expense</option>
     </select> 

     
     
<div>
 
    </div>
  
    <button onClick={add}>Add a transaction</button>
 </div>
  );
  }

  export default AddTransaction;