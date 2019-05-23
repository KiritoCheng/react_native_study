// import {getApi} from '../libs/api.js';
// const url = 'http://localhost:3000/api/users';


// const addUsers = `mutation addUser($Username:String!,$Password:String!,$Mail:String!){
//   addUser(Username:$Username,Password:$Password,Mail:$Mail) {
//     res
//     errors
//     msg
//   }
// }`

// const modifyUser = `mutation modifyUser($Uid: Int!,$Username:String,$Password:String,$Headimg:String,$Mail:String){
//   modifyUser(Uid:$Uid,Username:$Username,Password:$Password,Headimg:$Headimg,Mail:$Mail) {
//     res
//     errors
//     msg
//   }
// }`

// let httpGetUserInfo = (Uid) => {
//     return getApi(url, `{
//         getUsers(Uid:${Uid}) {
//             res
//             errors
//             data {Uid,Username,Password,Headimg,Mail}
//         }
//     }`).then(res => {
//         const { getUsers } = res;
//         if (getUsers.res != 0) {
//             return 'Server Errors:', getUsers.errors;
//         }
//         return getUsers
//     }).catch(err => {
//         return 'Server Errors:', err
//     })
// }

// let httpAddUse = ({ Username, Password, Mail }) => {
//     return getApi(url, addUsers, { Username, Password, Mail })
//         .then(res => {
//             const { addUser } = res;
//             if (addUser.res != 0) {
//                 return 'Server Errors:', addUser.errors;
//             }
//             return addUser.msg
//         })
//         .catch(err => {
//             return 'Server Errors:', err
//         })
// }

// let httpModifyUser = ({ Uid, Username, Password, Headimg, Mail }) => {
//     return getApi(url, modifyUser, { Uid, Username, Password, Headimg, Mail })
//         .then(res => {
//             const { modifyUser } = res;
//             if (modifyUser.res != 0) {
//                 return 'Server Errors:', modifyUser.errors;
//             }
//             return modifyUser.msg
//         })
//         .catch(err => {
//             return 'Server Errors:', err
//         })
// }

// export {
//     httpGetUserInfo,
//     httpAddUse
// }
// // httpAddUse({Username:"test7",Password:"test7",Mail:"test7"}).then(res=>{console.log('res',res)})
// // httpGetUserInfo(22).then(res=>{console.log('res',res)})

// httpModifyUser({ Uid: 23, Username: "TEST23", Password: "TEST23" }).then(r => {
//     console.log(r)
//     httpGetUserInfo(23).then(res => { console.log('res', res) })
// })