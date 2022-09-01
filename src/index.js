// const userAction = async () => {
//   const a = await fetch('http://localhost:3000/api/v1/productos', {
//     method: 'GET',
//     mode: 'no-cors',
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type' : 'application/json'
//     }
//   });
//   console.log(a)
// }

// userAction();

fetch('http://localhost:3000/api/v1/productos', {
  method: 'GET',
  mode: 'no-cors',
  headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type' : 'application/json'
  }
})
.then(response =>{
    return response.json();
}).then(data =>{
    console.log(data);
})
