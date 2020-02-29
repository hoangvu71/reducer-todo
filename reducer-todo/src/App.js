import React, { useState, useReducer } from "react"
import { todoReducer, initialState } from "./reducers/todoReducer"

import "./App.css"

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState)
  const [todo, setTodo] = useState();
  // const [toggle, setToggle] = useState( {completed: false })
  const addToDoHandler = (event) => {
    event.preventDefault();
    dispatch({ type: 'addNewTodo', payload: todo });
    setTodo("");
  }

  const clearToDoHandler = (event) => {
    event.preventDefault();
    dispatch( { type: "clearTodo", payload: state})
  }

  return (
    <div>
      <h2>Todo List: MVP</h2>
      {console.log(state)}
      <div>
        {state.toDos.map(ele => <div
        onClick={() => {dispatch({ type: "toggleCompleted", payload: ele.id})}}
        className={`${ele.completed ? "completed" : ""}`}
        >{ele.item}</div>)}
      </div>

      <form onSubmit={addToDoHandler}>
            <input value={todo} onChange={(event) => { setTodo(event.target.value) }} placeholder="...todo" />
            <button>Add Todo</button>
          </form>
          <form onSubmit={clearToDoHandler}>
            <button>Clear Completed</button>
          </form>
    </div>
      )
    }
    
    
    
    
    
    
export default App