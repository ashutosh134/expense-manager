import React from 'react'
import ListItem from './ListItem'

const ListGroup = ({transactions , deleteTransaction , editTransaction}) => {
  return (
    <div className="my-3">
    <h1 className="display-6 text-center text-primary">ALL TRANSACTION</h1>

    <ul className="list-group rounded-0">

   {/* {
    transactions.map((transaction) =>(
      <ListItem key={transaction.id} transaction={transaction}/>
    ))
   } */}

   {
    transactions.map((transaction)=> <ListItem key={transaction.id} transaction={transaction} deleteTransaction= {deleteTransaction} editTransaction={editTransaction}/>
    )
   }  

   {/* {
    transactions.map((ashu)=>(
      <ListItem key={ashu.id} ashu={ashu}/>
    ))
   } */}
     
</ul>
</div>
    
 
  )
}

export default ListGroup
