import React, { useState } from "react";

const TodoForm = () => {
  const [val, setVal] = useState("");
  const [todos, setTodos] = useState([]);
  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // prevents from refreashing page.
    // setTodos([
    //   ...todos,
    //   {
    //     id: crypto.randomUUID(),
    //     title: val,
    //     completed: false,
    //   },
    // ]);
    setTodos((currentTodos) => {
      // current value fro now this way it is updatedd instantly.
      /**The difference between the two approaches lies in how they handle state updates when using the setTodos function provided by the useState hook. Let’s break down each method:
       * This method is more reliable in scenarios where the state might be updated multiple times in quick succession or where state updates depend on the current state.
       *
       */
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title: val,
          completed: false,
        },
      ];
    
    });
    setVal("");
  };
  const toggleTodo = (id,isToggle)=>{
    setTodos((currentTodos)=>{
      // the currentTodo is an object the latest object to be precise. also note that just becuz the array is destructured that doesnt mean that the objects inside is destructured. it is there the same way.
      /**[
  { id: '1', title: 'Learn React', completed: true },
  { id: '2', title: 'Build Todo App', completed: false }
] */
      return currentTodos.map((todo)=>{
        // function return.
        if(todo.id==id) return {...todo,completed:isToggle}
        // the completed property is set to true.
        // console.log(todo)

        return todo;
        // if it didint matched it return the todo.
      })
    })

  }
  const handleDelete = (id)=>{
    setTodos((currentTodos)=>{
      return currentTodos.filter((todos)=>{
        todos.id!=id
      })
    })
  }
  console.log(todos);
  return (
    <>
      <form className="TodoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          placeholder="What is the task today"
          onChange={handleChange}
          // or use an arrow function.
          // e is the evenet. event here is onChange. e.target is the element on whuch the event is called input here. e.target.value is the value of the element (whuch is the value of input elemkent) .
          value={val} // makes sure all the values are stored in the val in useState's val.
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
      <h1>To Do List</h1>
      <ul>
        {todos.map((todo) => (
          // this way everythig inside the paranthesis is returned.
          <li key={todo.id}>
            {/* use key in top leval in each element. so that react knows what shud be edited in future or what is edited. when retutning an array of elelemnst . */}
            <label>
              <input type="checkbox" checked={todo.completed} onChange={(e)=>toggleTodo(todo.id,e.target.checked)}></input>
              {/* when the checkbox is checked or unchecked, this function will be called. */}
              {/* e.target.checked is a boolean that represents the new checked state of the checkbox (true if checked, false if unchecked).
 */}
              {todo.title}
            </label>
            <button className="todo-btn" onClick={(e)=>handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoForm;

// useState bts

// const useState(let x){
/** function(val){
 * x=val;
 * return [x,function]
 * only if useStAte is used the the value will change cuz inly here the component is rerendered.
 * setNum(54) === setNum(()=>54)
 * 
}*/
// }
