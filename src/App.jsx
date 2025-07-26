import { useEffect, useState } from "react";
import "./App.css";
import College, { Course, Fees } from "./assets/Cybrom";


const App = () => {

  const [name,setName] = useState("Tushar!");
  const [multi,setMulti] = useState(0);

  const [count,setCount] = useState(0);

  useEffect(()=>{
    
   setMulti(count*2);
    
  },[count])

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
    <h1>count value :{count}</h1>
    <button onClick={()=>{setCount(count+1)}}>increment</button>
    <h1>Multiplication value: {multi}</h1>
    </>
  );
};

export default App;
