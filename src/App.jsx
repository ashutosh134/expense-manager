import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Balance from './components/Balance'
import ListGroup from './components/ListGroup'

const App = () => {
  
  const [transactions , setTransactions] = useState([
   {
    id :1,
    text:"Salary",
    amount:20000,
   },

   {
    id:7,
    text:"clothing",
    amount:-3000,
   }
  
]);


const saveTransaction = (text , amount) =>{
  // console.log(saveTransaction)
const newTransaction = {
  id : crypto.randomUUID(),
  text:text,
  amount: parseInt(amount)
}

setTransactions([newTransaction, ...transactions]);



 };

 
  //delete//

  const deleteTransaction = (id) =>{
    setTransactions(transactions.filter((item) => item.id !== id));
  };

  //edit//

  const editTransaction = (transaction) =>{
    // console.log(transaction);
    setEdit({
      transaction:transaction,
      isEdit:true,
    })
  };

  const updateTransaction = (updatedTransaction) => {
       setTransactions(transactions.map((item)=>item.id === updatedTransaction.id ? updatedTransaction : item))
       
  }


  const [edit , setEdit] = useState({
    transaction:{},
    isEdit:false,
  });

  
  
  return (
    <>

    <Navbar/>

    <div className="container p-3">
      <h1 className="display-6 text-center">ENTER YOUR TRANSACTION</h1>
      <Form saveTransaction={saveTransaction} edit={edit} updateTransaction={updateTransaction}/>
      <Balance transactions={transactions}/>
      <ListGroup transactions={transactions} deleteTransaction={deleteTransaction} editTransaction={editTransaction}/>


    </div>
    
      
    </>
  )
}

export default App

