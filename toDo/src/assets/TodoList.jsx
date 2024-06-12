import React from 'react'
import TodoItems from './TodoItems'

const TodoList = ({todos, handledelete,handleCheckboxChange}) => {
  return (
    <ul>
    {todos.map(todo=>( 
    <TodoItems {...todo} handledelete={handledelete} handleCheckboxChange={handleCheckboxChange}/>
      )
    
    )}
  </ul>
  )
}

export default TodoList
