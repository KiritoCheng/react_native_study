const getApi = require('../libs/api.js')
const url = 'http://localhost:3000/api/products'

let queryList = `{
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
}`

let httpGetProductList = () => {
  getApi(url, queryList)
    .then(res => {
      const { getProducts = {} } = res;
      if (getProducts.res != 0) {
        console.log('Server Errors:', getProducts.errors);
        return [];
      }
      return getProducts.data
    })
    .catch(err => {
      console.log(err)
      return []
    })
}




var queryAdd = `mutation addProducts($Name:String!,$Price:String,$Cost:String,$Description:String,$Img:String){
  addProducts(Name:$Name,Price:$Price,Cost:$Cost,Description:$Description,Img:$Img){
    res
    errors
  }
}`;

let httpAddProduct = (Name,Price,Cost,Description) => {
  getApi(url, queryList,{Name,Price,Cost,Description})
    .then(res => {
       const { addProducts = {} } = res;
       console.log(addProducts)
        if (addProducts.res != 0) {
          
        }
    })
    .catch(err => {
      console.log(err)
    })

}

module.exports = {
  httpGetProductList,
  httpAddProduct
}