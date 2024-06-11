import React, { useState } from "react";
import "./../App.css"

const TodoForm = ({ addTodo }) => {
  const [val, setVal] = useState("");
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
    addTodo(val);
    setVal("");
  };
  return (
    <div>
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
    </div>
  );
};

export default TodoForm;
