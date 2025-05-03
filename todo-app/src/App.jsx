import React,{ useState } from 'react';
import './App.css'

let conunter = 4  ;

function App() {
  const [todos, setTodos] = useState([
    {
    id: 1,
    title: " Hii bro ",
    description: "How are you"
  },
  {
    id: 2,
    title: " go to gym ",
    description: "what are doing"
  },
  {
    id: 3,
    title: " eat food ",
    description: " think about aur disk "
  }
]);

  function addTodo() {
    setTodos([...todos,{
      id: 4,
      title: Math.random(),
      description: Math.random()
    }]);

  //   const newTodos = [];
  //   for (let i = 0; i < todos.length; i++) {
  //     newTodos.push(todos[i]);
  //   }   
  //   // newTodos == todos
  //   newTodos.push({
  //     id: 4,
  //     title: Math.random(),
  //     description: Math.random()
  //   })
  //   // existing ones + 1
  //   setTodos(newTodos)
  }

  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map(todo => <Todo key = {todo.id} title={todo.title} description={todo.description} />)}
    </div>
  )
}

function Todo({title,description}) {
  return <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
}

export default App
