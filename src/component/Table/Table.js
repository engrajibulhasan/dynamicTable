import React, { useState } from "react";
import Row from "../Row/Row";
import "./Table.css";

const Table = () => {
  //Fake Data , this data will come through rest api 
  const fakeData = [
    {
      id: 1,
      col1: "Data 1",
      col2: "Data 2",
      col3: "Data 3",
      status: 0,
    },
    {
      id: 2,
      col1: "Data 1",
      col2: "Data 2",
      col3: "Data 3",
      status: 0,
    },

    {
      id: 3,
      col1: "Data 1",
      col2: "Data 2",
      col3: "Data 3",
      status: 1,
    },
  ];

  //Data handling based on button click or checkbox
  //This is the final output
  const handleData = ({ id, col1, col2, col3, userName, dependant }) => {
    console.log(id, col1, col2, col3, userName, dependant);
  };

  //State management for parent data
  const [parentData, setParentData] = useState("");
  //console.log(parentData);

  return (
    <div>
      <label htmlFor="parentData">Parent Data</label>
      <input
        type="text"
        name="parentData"
        id="parentData"
        onKeyUp={(e) => setParentData(e.target.value)}
      />
      <br />
      <br />

      <table className="dynamic-table">
        <thead>
          <tr>
            <th>SL</th>
            <th>Col1</th>
            <th>Col2</th>
            <th>Col3</th>
            <th>Col4 Custom</th>
            <th>Col5 Custom</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {fakeData.map((dt) => (
            <Row
              key={dt.id}
              info={dt}
              parentData={parentData}
              handleData={handleData}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
