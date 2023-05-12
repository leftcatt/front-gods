const data = fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))

const dataObject = JSON.parse(data);
console.log(dataObject);