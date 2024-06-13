import React from 'react'

const TodoItem = ({completed, title, id, toggleTodo, handleDelete,handleEdit}) => {
  return (
    <div>
      <li key={id}>
            {/* use key in top leval in each element. so that react knows what shud be edited in future or what is edited. when retutning an array of elelemnst . */}
            <label>
              <input
                type="checkbox"
                checked={completed}
                onChange={(e) => toggleTodo(id, e.target.checked)}
              ></input>
              {/* when the checkbox is checked or unchecked, this function will be called. */}
              {/* e.target.checked is a boolean that represents the new checked state of the checkbox (true if checked, false if unchecked).
               */}
              {title}
            </label>
            <i class="fa-solid fa-pen-to-square edit-icon" onClick={()=>handleEdit(id)}></i>
            <i class="fa-solid fa-trash delete-icon"   onClick={() => handleDelete(id)}></i>
       
            
       
            {/* onClick={handleDelete(todo.id)}  -- this will call the function rightway and the result is passed. instead a function is needed that is called when the event is clicked or triggered
            benifits- custom argumemg and the ability to call other functions when triggerd in the previous case it is obvious that onSubmit does a submission method so need this
            passing the function directly as onClick={handleDelete(todo.id)} would not work as intended because it would call handleDelete immediately during the render process, not when the button is clicked. This would result in undesired behavior.,*/}
          </li>
    </div>
  )
}

export default TodoItem
