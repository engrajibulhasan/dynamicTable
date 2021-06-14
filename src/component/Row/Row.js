import React from 'react';

const Row = (props) => {
  const { id, col1, col2, col3, col4, status } = props.info;
  
  

    return (
      <tr>
        <td>{id}</td>
        <td>{col1}</td>
        <td>{col2}</td>
        <td>{col3}</td>
        <td>
          <input type="text" placeholder="User Name" />
        </td>
        <td>
          <input type="text" placeholder="Dependent Data" />
        </td>
        <td>
          <button onClick={() => props.handleData(id)}>Send</button>
        </td>
      </tr>
    );
};

export default Row;