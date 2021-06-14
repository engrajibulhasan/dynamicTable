import React, { useEffect, useState } from "react";

const Row = (props) => {
  const { id, col1, col2, col3, col4, status } = props.info;

  const [userName, setUserName] = useState("");
  const [dependant, setDependant] = useState("");
  const handleUserName = (payload) => {
    setUserName(payload);
  };

  useEffect(() => {
    setDependant(props.parentData);
  }, [props.parentData]);

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
      <td>
        <button
          onClick={() =>
            props.handleData({
              id,
              userName,
              dependant,
            })
          }
        >
          Send
        </button>
      </td>
    </tr>
  );
};

export default Row;
