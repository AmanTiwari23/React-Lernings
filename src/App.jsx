import { useEffect, useState } from "react";
import "./App.css";
import College, { Course, Fees } from "./assets/Cybrom";


const App = () => {
  const [name,setName]= useState("");
  const [city,setCity]= useState("");

  const handleSave = ()=>{
    console.log({name:name,city:city});
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
    Enter name: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
    Enter City: <input type="text" value={city} onChange={(e)=>{setCity(e.target.value)}} />
    <button onClick={handleSave}>Save!!</button>
    </>
  );
};

export default App;
