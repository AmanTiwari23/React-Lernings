import "./App.css";


const App = () => {

  const display=()=>{
       alert("welcome to cybrome");
  }
  const myval = (e)=>{
    let mytype = e.type;
    let myvalue= e.target.value;
    let mynm = e.target.name;
    alert(`type = ${mytype}, Value = ${myvalue} , Name = ${mynm}`);

  }
  const name = (fnm,snm,e)=>{
    console.log(e);
    alert(e.type);
  }
  return (
    <>
      <h1>react +Vite</h1>
      <button onClick={display}>welcome</button>
      <button value="button hai ek " name="btn" onClick={myval}>name</button>

    </>
  );
};

export default App;
