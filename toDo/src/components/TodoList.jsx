import React from 'react'
import TodoItem from './TodoItem'

const todoList = ({todos, toggleTodo, handleDelete}) => {
  return (
    <div>
       <ul>
        {todos.map((todo) => (
          // this way everythig inside the paranthesis is returned.
          <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} handleDelete={handleDelete}/>
        ))}
      </ul>
    </div>
  )
}

export default todoList
