import data from "./data";

function Table() {
  return (
    <tbody>
      {data.map((element) => {
        return (
          <tr>
            <tr scope="row">{data.indexOf(element) + 1}</tr>
            <td>{element.name}</td>
            <td>{element.age}</td>
            <td>{element.email}</td>
            <td>{element.phone}</td>
            <td>{element.address}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default Table;
