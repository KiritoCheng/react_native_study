const getApi = require('../libs/api.js');
const url = 'http://localhost:3000/api/products';

const queryList = `{
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
  return getApi(url, queryList)
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


const queryAdd = `mutation addProduct($Name:String!,$Price:Float,$Cost:Float,$Description:String,$Img:String){
  addProduct(Name:$Name,Price:$Price,Cost:$Cost,Description:$Description,Img:$Img){
    res
    errors
  }
}`;

let httpAddProduct = ({ Name, Price, Cost, Description }) => {
  return getApi(url, queryAdd, { Name, Price, Cost, Description })
    .then(res => {
      const { addProduct = {} } = res;
      if (addProduct.res != 0) {
        return 'Server Errors:', addProduct.errors;
      }
    })
    .catch(err => {
      return err
    })
}

const queryDelete = `mutation deleteProduct($ID:Int!){
  deleteProduct(ID:$ID){
    res
    errors
  }
}`;

let httpDeleteProduct = (ID) => {
  return getApi(url, queryDelete, { ID })
    .then(res => {
      const { deleteProduct = {} } = res;
      if (deleteProduct.res != 0) {
        return 'Server Errors:', deleteProduct.errors
      }
    })
    .catch(err => {
      return err
    })
}

const queryChange = `mutation modifyProduct($ID:Int!,$Name:String,$Price:Float,$Cost:Float,$Description:String,$Img:String){
  modifyProduct(ID:$ID,Name:$Name,Price:$Price,Cost:$Cost,Description:$Description,Img:$Img){
    res
    errors
  }
}`
let httpmodifyProduct = ({ ID, Name, Price, Cost, Description }) => {
  return getApi(url, queryChange, { ID, Name, Price, Cost, Description })
    .then(res => {
      const { modifyProduct = {} } = res;
      if (modifyProduct.res != 0) {
        console.log('Server Errors:', modifyProduct.errors);
        return;
      }
    })
    .catch(err => {
      console.log(err)
    })
}

module.exports = {
  httpGetProductList,
  httpAddProduct,
  httpDeleteProduct,
  httpmodifyProduct
}

// httpAddProduct({Name:"ss",Price:500}).then(()=>{
//   httpGetProductList().then(res=>{console.log(res)})
// })
// httpmodifyProduct({ID:20,Price:50,Cost:25,Description:"desc"}).then(()=>{
//   httpGetProductList().then(res=>{console.log(res)})
// })
// httpDeleteProduct(30)
httpGetProductList().then(res => { console.log(res) })
