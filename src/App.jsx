import { useEffect, useState } from "react";
import "./App.css";
import College, { Course, Fees } from "./assets/Cybrom";


const App = () => {
  const [input,setInput] = useState({});


  const handleSave = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setInput(values => ({...values,[name]:value}));
    console.log(input);
  }

  // const [name,setName] = useState("Tushar!");
  // const [multi,setMulti] = useState(0);

  // const [count,setCount] = useState(0);

  // useEffect(()=>{
    
  //  setMulti(count*2);
    
  // },[count])

  // const decrement=()=>{
  //   if(count<=1){
  //     alert("no decrement")
  //   }else{
  //     setCount(count-1);
  //   }
  // }
  // const myname = ()=>{
  //   setName("Aman Tiwari");
  // }
  return (
    <>
    <h1>Application form</h1>
    Enter EmpID : <input type="text" name="empId" onChange={handleSave} />
    Enter Employename: <input type="text" name="empName" onChange={handleSave} />
    Enter employeCity: <input type="text" name="City" onChange={handleSave} />
    Enter Salary : <input type="text" name="Salary" onChange={handleSave} />
    <button onClick={handleSave}>Save!!</button>
    </>
  ); 
};

export default App;
