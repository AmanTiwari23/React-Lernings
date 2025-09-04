


import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './todoSlice';

const App = () => {

  const[txtval,setTextValue] = useState("");
  const dispatch = useDispatch();
  const myTask = useSelector(store => store.mytodo.task)

  const handlesubmit = () =>{
     dispatch(addTask({id:Date.now(),work:txtval}))
  }

  let sno = 0;

  const ans = myTask.map((key)=>{
    sno++;
    return(
      <tr>
        <td>{sno}</td>
        <td>{key.work}</td>
      </tr>
    )
  })

  return (
    <>
    <h1>To Do List</h1>
   <hr />
    Enter your task : <input type='text' value={txtval} onChange={(e)=>{setTextValue(e.target.value)}}/> 
    <button onClick={handlesubmit}>Add task</button>

    <table border="2" width="200px" >

     <thead >
      <tr>
        <th>Sno</th>
        <th>Task</th>
      </tr>
     </thead>
     <tbody>
      {ans}
     </tbody>

    </table>


    </>
  )
}

export default App