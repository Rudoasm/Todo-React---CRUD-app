import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  // const [todos, setTodos] = useState([]);
  // to persisit the data or item in the localstorage use useEffect hook. so that data is not lost when refreash
  // the function executes each time the e=second parameter changes.
  const [todos, setTodos] = useState(() => {
    // same as [] the only thing is this value is anything that is returned,
    const localvalue = localStorage.getItem("ITEMS");
    if (localvalue === null) return [];
    return JSON.parse(localvalue);
    // json is parsed back.
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
    // stored in localstorage. to get items from ls use the function version of useState.
  }, [todos]);

  function addTodo(title) {
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
          title,
          completed: false,
        },
      ];
    });
  }
  // notice how toDo needs to be in two places simultaneously so pass it as props.
  const toggleTodo = (id, isToggle) => {
    setTodos((currentTodos) => {
      // the currentTodo is an object the latest object to be precise. also note that just becuz the array is destructured that doesnt mean that the objects inside is destructured. it is there the same way.
      /**[
  { id: '1', title: 'Learn React', completed: true },
  { id: '2', title: 'Build Todo App', completed: false }
] */
      return currentTodos.map((todo) => {
        // function return.
        if (todo.id == id) return { ...todo, completed: isToggle };
        // the completed property is set to true.
        // console.log(todo)

        return todo;
        // if it didint matched it return the todo.
      });
    });
  };
  const handleDelete = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todos) => {
        return todos.id != id;
        // if the return is not passed it will dekete all items.
      });
    });
  };
  console.log(todos);
  return (
    <>
      <TodoForm addTodo={addTodo} />
      <h1>To Do List</h1>

      {todos.length === 0 && "No Todos"}
      {/* true means second would execute. false means it wont */}
      {/* short circuiting 
      true || false is ansyways true so the second parameter doesnt need to execute.
      false || console.log()
      // the console log will execute to find if the rear is true or false so that it cud cone into a conclusion.
      <Tod
      */}
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default App;

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
