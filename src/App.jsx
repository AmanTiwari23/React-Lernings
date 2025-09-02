import {useSelector,useDispatch} from "react-router";
import {colorChange} from "./colorSlice";
import { useState } from "react";

const App = ()=>{
  const myclr = useSelector(state => state.mycolor.color);
  const dispatch = useDispatch();
  const [txtval, setTxtVal] = useState("");
    
    return(
        <>
        <h1>welcome</h1>
        Enter color: <input type="text" onChange={(e)=>{setTxtVal(e.target.value)}}/>
        <button onClick={()=>{dispatch(colorChange(txtval))}}>Click here !</button>
        <div style={{width:"400px", height:"200px", backgroundColor:myclr}}></div>
        </>
    )
}

export default App;