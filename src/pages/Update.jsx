import axios from "axios";
import React, { useEffect, useState } from "react";

const Update = () => {
  const [myData, setMyData] = useState([]);

  const [editId, setEditId] = useState(null);

  const [formData,setFormData] = useState({
    roll:"",
    name:"",
    city:"",
    fees:""
  });

  const loadData = async () => {
    const api = "http://localhost:3000/students";
    const response = await axios.get(api);
    console.log(response.data);
    setMyData(response.data);
  };

  const myDel = async (id) => {
    let api = `http://localhost:3000/students/${id}`;
    const response = await axios.delete(api);
    console.log(response);
    alert("Record Deleted !!");
    loadData();
  };

  const myUpdate = (item) => {
    setEditId(item.id);
    setFormData({
      roll: item.roll,
      name: item.name,
      city: item.city,
      fees: item.fees
    });
    
  };

  const handleChange=(e)=>{
    setFormData(prev=>({
      ...prev,[e.target.name]:e.target.value
    }));
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(editId !== null){
      let api = `http://localhost:3000/students/${editId}`;
      await axios.put(api,formData);
      alert("Record Updated!");
      setEditId(null)
      setFormData({roll:"",name:"",city:"",fees:""});
      loadData();
    }
  };


  useEffect(() => {
    loadData();
  }, []);

  const ans = myData.map((item) => {
    return (
      
        <tr key={item.id}>
          <td>{item.roll}</td>
          <td>{item.name}</td>
          <td>{item.city}</td>
          <td>{item.fees}</td>
          <td>
            <button
              onClick={() => {
                myDel(item.id);
              }}
            >
              Delete
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                myUpdate(item);
              }}
            >
              Edit
            </button>
          </td>
        </tr>
      
    );
  });

  return (
    <>
      <div>Update Page</div>

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="roll"
          placeholder="Roll No"
          value={formData.roll}
          onChange={handleChange}
        />

         <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

         <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />

         <input
          type="text"
          name="fees"
          placeholder="Fees"
          value={formData.fees}
          onChange={handleChange}
        />

        <button type="submit">
          {editId === null ? "Select Row to Edit" : "Update Record"}
        </button>

      </form>
      <table border="1" width="700">
        <thead>
          <tr>
          <th>Roll no</th>
          <th>Name</th>
          <th>City</th>
          <th>Fees</th>
          <th></th>
          <th></th>
        </tr>
        </thead>
        <tbody>
          {ans}
        </tbody>
        
        
      </table>
    </>
  );
};

export default Update;
