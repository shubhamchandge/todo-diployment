import React, { useState } from 'react'
import "./Inputgroup.css"


const Inputgroup = ({ todolist, setTodolist }) => {
  const [title, setTitle] = useState(" ")
  const [description, setDescription] = useState(" ");

  const handlechange = (e) => {
    const { name, value } = e.target;

    name === "title" ? setTitle(value) : setDescription(value);
    // console.log(title);
    // console.log(description);
  }

  const handleClick = () => {
    const updatedlist = [...todolist];
    const newitem = { title: title, description: description };
    
    updatedlist.push(newitem);
    setTodolist(updatedlist);
    console.log(updatedlist)
  }

  return (
    <div>
      <div>
        <lable>Title</lable>
        <input name='title'
         type="text"
          value={title}
          onChange={handlechange} />
      </div>

      <div>
        <lable>Description</lable>
        <input name='description'
          type="text" 
          value={description}
          onChange={handlechange} />
      </div>

      <div>
        <button onClick={handleClick}> + Add-Item</button>
      </div>
    </div>
  )
}

export default Inputgroup
