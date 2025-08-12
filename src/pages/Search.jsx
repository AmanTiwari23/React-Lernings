import axios from "axios";
import { useState } from "react";

const Search = () => {
  const [roll, setRoll] = useState("");
  const [myData, setMyData] = useState([]);

  const handleSubmit = async () => {
    let api = `http://localhost:3000/students/?roll=${roll}`;
    const response = await axios.get(api);
    console.log(response.data);
    setMyData(response.data);
  };
  const ans = myData.map((key) => {
    return (
      <tr key={key.id}>
        <td>{key.roll}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.fees}</td>
      </tr>
    );
  });

  return (
    <>
      <h1>Search Page</h1>
      Enter Rollno :{" "}
      <input
        type="text"
        value={roll}
        onChange={(e) => {
          setRoll(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Search</button>
      <hr />
      <table width="600" border="1">
        <thead>
          <tr>
            <th>Rollno</th>
            <th>Name</th>
            <th>City</th>
            <th>Fees</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </table>
    </>
  );
};

export default Search;
