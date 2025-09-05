import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, taskDelete, taskComplete, taskIncomplete,edittaskSave } from "./todoSlice";

const App = () => {
  const [txtval, setTextValue] = useState("");
  const dispatch = useDispatch();
  const [btnstatus, setbtnStatus] = useState(true);
  const [myid, setMyid] = useState("");
  const myTask = useSelector((store) => store.mytodo.task);

  const handlesubmit = () => {
    dispatch(addTask({ id: Date.now(), work: txtval, status: false }));
  };

  const handleEdit = (id, work) => {
    setMyid(id);
    setTextValue(work);
    setbtnStatus(false);
  };
  const myEditsave =()=>{
    dispatch(edittaskSave({id:myid,newtask:txtval}))
    setbtnStatus(true);
    setTextValue("");
  }

  let sno = 0;

  const ans = myTask.map((key) => {
    sno++;
    return (
      <tr>
        <td>{sno}</td>
        <td>
          {key.status ? (
            <>
              {" "}
              <span style={{ color: "red", textDecoration: "line-through" }}>
                {key.work}
              </span>
            </>
          ) : (
            <> {key.work}</>
          )}
        </td>
        <td>
          <button
            onClick={() => {
              dispatch(taskDelete({ id: key.id }));
            }}
          >
            Delete
          </button>{" "}
        </td>
        <td>
          <button
            onClick={() => {
              dispatch(taskComplete({ id: key.id }));
            }}
          >
            Complete
          </button>
        </td>
        <td>
          <button
            onClick={() => {
              dispatch(taskIncomplete({ id: key.id }));
            }}
          >
            Incomplete
          </button>
        </td>
        <td>
          <button onClick={() => handleEdit(key.id, key.work)}>Edit</button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <h1>To Do List</h1>
      <hr />
      Enter your task :{" "}
      <input
        type="text"
        value={txtval}
        onChange={(e) => {
          setTextValue(e.target.value);
        }}
      />
      {btnstatus ? (
        <>
          {" "}
          <button onClick={handlesubmit}>Add task</button>
        </>
      ) : (
        <>
          <button onClick={myEditsave}>Edit save</button>
        </>
      )}
      <table border="2" width="200px">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Task</th>
            <td> </td>
            <td></td>
            <td> </td>
            <td> </td>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </table>
    </>
  );
};

export default App;
