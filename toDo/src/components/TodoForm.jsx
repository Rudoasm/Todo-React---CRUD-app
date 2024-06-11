import React, { useState } from "react";

const TodoForm = () => {
  const [val, setVal] = useState("");
  const [todos, setTodos] = useState([])
  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    // prevents from refreashing page.
    setTodos([...todos,{
      id:crypto.randomUUID(),title:val, completed:false 
    }])

  }
  console.log(todos)
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
      <button
        type="submit"
        className="todo-btn"
       
      >
        Add Task
      </button>
    </form>
    <h1>To Do List</h1>
    <ul>
      <li>
        <label>
          <input type="checkbox">
          </input>
          Item 1
        </label>
        <button className="todo-btn">Delete</button>
      </li>
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
