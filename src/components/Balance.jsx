import React from 'react'

const Balance = ({transactions}) => {

const bal = transactions.reduce((p,c) => {

   return p + c.amount;
} , 0 );

const exp = transactions.filter( (transaction) => transaction.amount < 0).reduce((p,c) => {
   return p + c.amount;
}, 0);

const income = transactions.filter((transaction)=>transaction.amount >0).reduce((p,c) => {
   return p +c.amount;
}, 0)





  return (
   <div className="my-3 row">
    <div className="col-md-3 col-lg-4 col-sm-12">
     <div className="card rounded-0 bg-info p-3">
        <h1 className="display-6 text-center">Income</h1>
        <h1 className="display-6 text-center">{income}</h1>
     </div>
    </div>

    <div className="col-md-3 col-lg-4 col-sm-12">
     <div className="card rounded-0 bg-danger p-3">
        <h1 className="display-6 text-center">expense</h1>
        <h1 className="display-6 text-center">{exp}</h1>
     </div>
    </div>

    <div className="col-md-3 col-lg-4 col-sm-12">
     <div className="card rounded-0 bg-success p-3">
        <h1 className="display-6 text-center">Balance</h1>
        <h1 className="display-6 text-center">{bal}</h1>
     </div>
    </div>
   </div>
  )
}

export default Balance
