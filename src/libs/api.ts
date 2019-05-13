let fetch  = require("node-fetch");

export const  getApi = (url,query,variables=null)=>{
  return new Promise(( resolve ,reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables
        })
      })
      .then(r => r.json())
      .then(res => {
        if(res.errors){reject(res.errors);return}
        resolve(res.data)
      });
  })
}