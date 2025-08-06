import React from 'react'
import { useParams } from 'react-router-dom';

const MyEdit = () => {

    const {id}=useParams();
    const [editId, setEditId] = useState(null);
    
      const [formData,setFormData] = useState({
        roll:"",
        name:"",
        city:"",
        fees:""
      });
  return (
    <>
    <h1>Edit Record : {id}</h1>
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
    </>
  )
}

export default MyEdit;