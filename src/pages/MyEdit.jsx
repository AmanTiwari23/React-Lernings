import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MyEdit = () => {
  const { id } = useParams();
  const [myData, setMyData] = useState({
    roll: "",
    name: "",
    city: "",
    fees: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const api = `http://localhost:3000/students/${id}`;
    const response = await axios.get(api);
    setMyData(response.data);
  };

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setMyData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async () => {
    const api = `http://localhost:3000/students/${id}`;
    const response = await axios.put(api, myData);
    setMyData({ roll: "", name: "", city: "", fees: "" });
  };

  return (
    <>
      <h1>Edit Record : {id}</h1> <br />
      Edit Rollno :{" "}
      <input
        type="text"
        name="roll"
        value={myData.roll}
        onChange={handleInput}
      />{" "}
      <br />
      Edit Name:{" "}
      <input
        type="text"
        name="name"
        value={myData.name}
        onChange={handleInput}
      />{" "}
      <br />
      Edit City:{" "}
      <input
        type="text"
        name="city"
        value={myData.city}
        onChange={handleInput}
      />{" "}
      <br />
      Edit Fees:{" "}
      <input
        type="text"
        name="fees"
        value={myData.fees}
        onChange={handleInput}
      />{" "}
      <br />
      <button onClick={handleSubmit}>Save Edit</button>
    </>
  );
};

export default MyEdit;
