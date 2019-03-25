const getApi = require('../libs/api.js')

let query = `{
  getProducts {
    res
    errors
    data {
      ID
      Name
      Price
      Cost
      Description
      Img
      Update_time
    }
  }
}`;

let httpGetProductsList=()=>{
  getApi(query).then(res=>{
    const {products={}} = res
    if(products.res!=0){
      console.log('Server Errors:',products.errors)
      return []
    }
    return products.data
  }).catch(err=>{
    console.log(err);
    return []
  })
}
module.exports = httpGetProductsList

