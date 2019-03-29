const getApi = require('../libs/api.js');
const url = 'http://localhost:3000/api/users';

const getUserInfo = `{

}`

const addUsers = `mutation addUser($Username:String!,$Password:String!,$Mail:String!){
  addUser(Username:$Username,Password:$Password,Mail:$Mail) {
    res
    errors
    msg
  }
}`

const modifyUser = `{
    
}`

let httpGetUserInfo = (ID)=>{}

let httpAddUse = ({Username,Password,Mail})=>{
    return getApi(url,addUsers,{Username,Password,Mail})
    .then(res => {
        const {addUser} = res;
        if (addUser.res != 0) {
          return 'Server Errors:', addUser.errors;
        }
        return addUser.msg
    })
    .catch(err => {
        return 'Server Errors:',err
    })
}

module.exports = {
    httpAddUse
}

httpAddUse({Username:"test6",Password:"test6",Mail:"test6"}).then(res=>{console.log('res',res)})
