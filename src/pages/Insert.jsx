import { useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
 import { ToastContainer, toast } from 'react-toastify';



const Insert = () => {
  const [input,setInput] = useState({});


  const handleInput = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({...values,[name]:value}));
    console.log(input);
  }


  const handleSubmit = async()=>{
    const api = "http://localhost:3000/students";
    const response = await axios.post(api,input);
    console.log(response);
       toast.success("successful", { autoClose: 3000 });

  }

 
  return (
    <>
    <h1>Insert Page</h1>
    Enter RollNo : <input type="text" name="roll" onChange={handleInput} /> <br />
    Enter Name: <input type="text" name="name" onChange={handleInput} /> <br />
    Enter City: <input type="text" name="city" onChange={handleInput} /> <br />
    Enter Fees : <input type="text" name="Salary" onChange={handleInput} /> <br />
    <button onClick={handleSubmit}>Save!!</button>
    <ToastContainer />
   

    </>
  ); 
};

export default Insert;
