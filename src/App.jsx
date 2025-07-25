import { useState } from "react";
import "./App.css";
import College, { Course, Fees } from "./assets/Cybrom";


const App = () => {

  const [name,setName] = useState("Tushar!");
  const [color,setColor] = useState("red");

  const myname = ()=>{
    setName("Aman Tiwari");
  }
  return (
    <>
     <h1 style={{color:color}}>My favrouit color is : {color}</h1>
     <button onClick={()=>{setColor("blue")}}>blue</button>
     <button onClick={()=>{setColor("green")}}>green</button>
     <button onClick={()=>{setColor("yellow")}}>yellow</button>
     <button onClick={()=>{setColor("pink")}}>pink</button>
     <button onClick={()=>{setColor("orange")}}>orange</button>
    </>
  );
};

export default App;
