import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [inputText,setInputText] = useState('')
    function handleChange(e){
        setInputText(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        addTodo(inputText)
        setInputText('')
    }
  return (
    <form onSubmit={handleSubmit} className='TodoForm'>
        <input type='text' placeholder='what are you doing today?' value={inputText} onChange={handleChange} className='todo-input'></input>
        {/* {console.log(inputText)} */}
        <button className='todo-btn' >Add Todo</button>
    </form>
  )
}

export default TodoForm
