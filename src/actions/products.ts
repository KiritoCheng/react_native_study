import { getApi } from '../libs/api.js';
import { ThunkDispatch } from "redux-thunk";
import { getProducts } from '../schema/query';
import { getProductsTypes, resTypes, addProductTypes } from '../schema/type';
import { addProduct } from '../schema/mutation';
const url = 'http://localhost:3000/api/products';

export const GET_PRODUCTS = 'GET_PRODUCTS'
export const productsList = (data: getProductsTypes[]) => {
    return {
        type: GET_PRODUCTS,
        data
    }
}
export const httpGetProductsList = () => {
    return (dispatch: ThunkDispatch<any, any, any>, _getState: () => void) => {
        getApi(url, `{
            ${getProducts}
          }`)
            .then((r: { getProducts: resTypes }) => {
                const { getProducts = {} } = r;
                if (getProducts.res != 0) {
                    console.log('Server Errors:', getProducts.errors);
                    dispatch(productsList([]));
                }
                dispatch(productsList(getProducts.data))
            })
            .catch((err: any) => {
                console.log(err)
                dispatch(productsList([]))
            })

    }
}



export const httpAddProduct = (argus: addProductTypes) => {
    const { Name, Price, Cost, Description } = argus;
    return (dispatch: ThunkDispatch<any, any, any>, getState: () => void) => {
        getApi(url, addProduct, { Name, Price, Cost, Description })
            .then((r: { addProduct: resTypes }) => {
                const { addProduct = {} } = r;
                if (addProduct.res != 0) {
                    console.log('Server Errors:', addProduct.errors);
                    // dispatch(getState().productsList.push())
                }
            })
            .catch((err: any) => {
                console.log(err)
            })
    }
}


// const queryDelete = `mutation deleteProduct($ID:Int!){
//   deleteProduct(ID:$ID){
//     res
//     errors
//   }
// }`;

// let httpDeleteProduct = (ID) => {
//     return getApi(url, queryDelete, { ID })
//         .then(r => {
//             const { deleteProduct = {} } = r;
//             if (deleteProduct.res != 0) {
//                 return 'Server Errors:', deleteProduct.errors
//             }
//         })
//         .catch(err => {
//             return err
//         })
// }

// const queryChange = `mutation modifyProduct($ID:Int!,$Name:String,$Price:Float,$Cost:Float,$Description:String,$Img:String){
//   modifyProduct(ID:$ID,Name:$Name,Price:$Price,Cost:$Cost,Description:$Description,Img:$Img){
//     res
//     errors
//   }
// }`
// let httpmodifyProduct = ({ ID, Name, Price, Cost, Description }) => {
//     return getApi(url, queryChange, { ID, Name, Price, Cost, Description })
//         .then(r => {
//             const { modifyProduct = {} } = r;
//             if (modifyProduct.res != 0) {
//                 console.log('Server Errors:', modifyProduct.errors);
//                 return;
//             }
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

// export {
//     httpGetProductList,
//     // httpAddProduct,
//     httpDeleteProduct,
//     httpmodifyProduct
// }

// httpAddProduct({Name:"ss",Price:500}).then(()=>{
//   httpGetProductList().then(res=>{console.log(res)})
// })
// httpmodifyProduct({ID:20,Price:50,Cost:25,Description:"desc"}).then(()=>{
//   httpGetProductList().then(res=>{console.log(res)})
// })
// httpDeleteProduct(30)
// httpGetProductList().then(res => { console.log(res) })
