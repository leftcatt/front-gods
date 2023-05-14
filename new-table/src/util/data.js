import { useState, useEffect } from "react";

function TableComponent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <tbody>
      {data.map((user) => (
        <tr>
          <th scope="row">{user.id}</th>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>
            City:{user.address.city} | Street:{user.address.street}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default TableComponent;
