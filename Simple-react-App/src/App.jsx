import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios";
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/todos")
    .then(function(response) {
      setTodos(response.data.todos)
    })
  }, []);

  return (
    <>
      {todos.map(todo => <Todo title={todo.title} description={todo.description}/>)}
    </>
  )
}

function Todo({title, description}) {
  return <div>
    <h1>{title}</h1>
    {description}
  </div>
}

export default App
