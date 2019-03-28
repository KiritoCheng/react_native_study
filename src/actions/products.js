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


const queryAdd = `mutation addProduct($Name:String!,$Price:Int,$Cost:Int,$Description:String,$Img:String){
  addProduct(Name:$Name,Price:$Price,Cost:$Cost,Description:$Description,Img:$Img){
    res
    errors
  }
}`;

let httpAddProduct = ({Name,Price,Cost,Description}) => {
  return getApi(url, queryAdd, {Name,Price,Description})
    .then(res => {
        const { addProduct = {} } = res;
        if (addProduct.res != 0) {
          console.log('Server Errors:', addProduct.errors);
          return;
        }
    })
    .catch(err => {
      console.log(err)
    })
}

const queryDelete = `mutation deleteProduct($ID:Int!){
  deleteProduct(ID:$ID){
    res
    errors
  }
}`;

let httpDeleteProduct = (ID) => {
  return getApi(url, queryDelete, {ID})
    .then(res => {
        const { deleteProduct = {} } = res;
        if (deleteProduct.res != 0) {
          console.log('Server Errors:', deleteProduct.errors);
          return;
        }
    })
    .catch(err => {
      console.log(err)
    })
}

const queryChange = `mutation changeProduct($ID:Int!,$Name:String,$Price:Int,$Cost:Int,$Description:String,$Img:String){
  changeProduct(ID:$ID,Name:$Name,Price:$Price,Cost:$Cost,Description:$Description,Img:$Img){
    res
    errors
  }
}`
let  httpChangeProduct = ({ID,Name,Price,Cost,Description}) => {
   return getApi(url, queryChange, {ID,Name,Price,Cost,Description})
     .then(res => {
        const { changeProduct = {} } = res;
        if (changeProduct.res != 0) {
          console.log('Server Errors:', changeProduct.errors);
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
  httpChangeProduct
}

// httpAddProduct({Name:"5555",Price:"500",Description:"desc"}).then(()=>{
//   httpGetProductList().then(res=>{console.log(res)})
// })
// httpChangeProduct({ID:17,Price:30,Cost:25,Description:"desc"}).then(()=>{
//   httpGetProductList().then(res=>{console.log(res)})
// })
// httpDeleteProduct(10)
