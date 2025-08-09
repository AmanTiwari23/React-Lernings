import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Display = () => {

  const[myData,setMyData] = useState([]);

  const loadData = async ()=>{
    let api = "http://localhost:3000/students";
    const response = await axios.get(api);
    console.log(response.data); 
    setMyData(response.data);
    
  }

  useEffect( ()=>{
     loadData();
  },[]);

  const ans = myData.map((key) => {
       return(  
       <><tr>
          
          <td key={key.id}>{key.roll}</td>
          <td key={key.id}>{key.name}</td>
          <td key={key.id}>{key.city}</td>
          <td key={key.id}>{key.fees}</td>
         </tr>
         </>
       )
  })

  return (
   <> 
   <h1>Display</h1>
   <table border="1" color='green'>
    <thead>
       <tr>
     
      <th>Roll No.</th>
      <th>Name</th>
      <th>City</th>
      <th>Total Fees</th>
    </tr>
    </thead>
    <tbody>
      {ans}
    </tbody>
   
    
   </table>
   </>
  )
}

export default Display