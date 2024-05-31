import React from 'react'

const ListItem = ({transaction , deleteTransaction , editTransaction}) => {
  return (
    <li className={transaction.amount > 0 ? "list-group-item bg-success py-3" : "list-group-item bg-danger py-3"}>
        <h1 className="text-dark display-6">{transaction.text} : {transaction.amount}</h1>
        <span className='float-end'>
            <button className="btn btn-danger mx-3 rounded-0" onClick={() => editTransaction(transaction)}>edit</button>
            <button className="btn btn-danger rounded-0" onClick={() => deleteTransaction(transaction.id)}>delete</button>
        </span>
    </li>
  )
}

export default ListItem
