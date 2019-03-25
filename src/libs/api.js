let fetch  = require("node-fetch");

let getApi = (query)=>{
  return new Promise(( resolve ,reject) => {
      fetch('http://localhost:3000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables: null
        })
      })
      .then(r => r.json())
      .then(res => {
        if(res.errors){reject(res.errors);return}
        resolve(res.data)
      });
  })
}

module.exports = getApi;