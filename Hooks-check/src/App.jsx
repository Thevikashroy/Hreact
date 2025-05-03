import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"

import './App.css'

function App() {
  // state? useState
  const [selectedId, setSelectedId] = useState(1);

  return <div>
    <button onClick={function() {
      setSelectedId(1);
    }}>1</button>
    <button onClick={function() {
      setSelectedId(2);
    }}>2</button>
    <button onClick={function() {
      setSelectedId(3);
    }}>3</button>

    <Todo id={selectedId} />
  </div>
}


function Todo({id}) {
  const [todo, setTodo] = useState({});

  // implement effect here
  useEffect(() => {
    axios.get(`http://localhost:3000/todos/${id}`)
      .then(response => {
        setTodo(response.data.todo)
      })
  }, [id])


  return (
    <>
    id: {id}
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
    </>
  )
}

export default App
