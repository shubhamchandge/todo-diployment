import React, { useState } from 'react'
import "./App.css"
import Inputgroup from './component/Inputgroup/Inputgroup'
import Todocard from './component/Todocard/Todocard';
import uniqid from 'uniqid';

const App = () => {
  const [todolist, setTodolist] = useState([
    {
      title: "test 01",
      description: "hey this is coader"
    },
    {
      title: "test 02",
      description: "hey this is coader"
    },
  ]);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>ToDo - App</h1>
        <Inputgroup todolist={todolist} setTodolist={setTodolist} />

        <hr />
        {todolist.map((item) => {
          return (<Todocard
            key={uniqid()}
            title={item.title}
            description={item.description} />
          )
        })}
      </header>
    </div>
  )
}

export default App
