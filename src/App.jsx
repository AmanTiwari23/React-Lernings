import { useEffect, useState } from "react";
import "./App.css";
import College, { Course, Fees } from "./assets/Cybrom";


const App = () => {

  const [name,setName] = useState("Tushar!");
  const [color,setColor] = useState("red");

  const [count,setCount] = useState(0);

  useEffect(()=>{
    setTimeout(()=>{
   setCount(count+1);
    },3000)
  },[])

  const decrement=()=>{
    if(count<=1){
      alert("no decrement")
    }else{
      setCount(count-1);
    }
  }
  const myname = ()=>{
    setName("Aman Tiwari");
  }
  return (
    <>
     <button onClick={()=>{setCount(count+1)}}>Increment</button>
     <h1>{count}</h1>
     <button onClick={()=>{decrement()}}>decrement</button>
    </>
  );
};

export default App;
