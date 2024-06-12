import React from 'react'
import TodoItem from './TodoItem'

const todoList = ({todos, toggleTodo, handleDelete,handleEdit}) => {
  return (
    <div>
       <ul>
        {todos.map((todo) => (
          // this way everythig inside the paranthesis is returned.
          // return(    <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} handleDelete={handleDelete}/>)
          /**return (<li>{todo.title}</li>) */
           // In the correct version, you use an implicit return without curly braces: everything inside the braces are returned.
          /**return (<li>{todo.title}</li>) */
          <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} handleDelete={handleDelete} handleEdit={handleEdit}/>
         
          // normally retrun would store the result in an array but the return here needs to return a html tag.
        ))}
      </ul>
    </div>
  )
}

export default todoList
