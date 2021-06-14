import React, { useEffect, useState } from "react";
import './Row.css';

const Row = (props) => {
  // Receiving Data from Table Component
  const { id, col1, col2, col3, status } = props.info;

  //Created State for state management
  const [userName, setUserName] = useState("");
  const [dependant, setDependant] = useState("");

  //Checkbox Handling
  const handleCheckbox = (payload) => {
    if (payload) {
      props.handleData({ id, col1, col2, col3, userName, dependant });
    } else {
      console.log(payload);
    }
  };

  //User data Handling
  const handleUserName = (payload) => {
    setUserName(payload);
  };

  //changing all child dependant value based on props.parentData
  useEffect(() => {
    setDependant(props.parentData);
  }, [props.parentData]);

  // dependant data Handling
  const handleDependant = (payload) => {
    setDependant(payload);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{col1}</td>
      <td>{col2}</td>
      <td>{col3}</td>
      <td>
        <input
          onChange={(e) => handleUserName(e.target.value)}
          name="userName"
          type="text"
          placeholder="User Name"
        />
      </td>
      <td>
        <input
          onChange={(e) => handleDependant(e.target.value)}
          name="dependant"
          type="text"
          placeholder="Dependent Data"
          value={dependant}
        />
      </td>
      <td className="actionTd">
        <button className="actionBtn"
          onClick={() =>
            props.handleData({
              id,
              col1,
              col2,
              col3,
              userName,
              dependant,
            })
          }
        >
          
          {
            status?'already Sent':'Send'
          }
        </button>
    

        
        <label className="checkbox-container">
          <input type="checkbox" name="check"
            id=""
            onChange={(e) => handleCheckbox(e.target.checked)}/>
          <span className="checkmark"></span>
        </label>
          
      </td>
    </tr>
  );
};

export default Row;
