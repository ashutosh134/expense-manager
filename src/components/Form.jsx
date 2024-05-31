import React, {useEffect, useState} from 'react'



// savetransaction
const Form = ({ saveTransaction , edit ,updateTransaction }) => {


  const [text , setText] = useState("")
  const [amount , setAmount] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    edit.isEdit 
    ? updateTransaction({
      id : edit.transaction.id,
      text,
      amount : parseInt(amount), }
    ): saveTransaction(text , amount);

    setText("");
    setAmount(""); 
  };
  useEffect(() => {
    setText(edit.transaction.text)
    setAmount(edit.transaction.amount)

  },[edit]);

  

  return (
<div className="card rounded-0 p-5">
    <form onSubmit={handleSubmit}>
        <input type="text" className="form-control p-3 my-3 rounded-0" placeholder="enter text" 
        value={text}
        onChange = {(e) => setText(e.target.value)} required/>
        <input type="number" className="form-control p-3 my-3 rounded-0" placeholder=" enter amount"
        value={amount} 
        onChange ={(e) => setAmount(e.target.value)}
        required/>
        <button className="btn btn-success rounded-0 w-100">save</button>
    </form>
</div>
  )
}

export default Form
