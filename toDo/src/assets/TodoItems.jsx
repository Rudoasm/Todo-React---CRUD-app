import React from 'react'

const TodoItems = ({title, checked, id, handledelete, handleCheckboxChange}) => {
   
  return (
    <li key={id}>
    <input type='checkbox' checked={checked} onChange={(e)=>handleCheckboxChange(e.target.checked,id)}></input>
  {title}
  <button onClick={()=>handledelete(id)} className='todo-btn'>delete</button>
  </li>
  )
}

export default TodoItems
