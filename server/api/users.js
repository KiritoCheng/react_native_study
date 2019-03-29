var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
let query = require('../sql/query.js');

var schema = buildSchema(`
    interface res{
        res:Int
        errors:String 
    },
    type userInfo{
        Uid: Int
        Username:String
        Password:String
        Headimg:String
        Mail:String
    },
    type usersRes implements res{
        res:Int
        errors:String
        data:userInfo
    },
    type mutationRes implements res {
        res:Int
        errors:String
        msg:String
    },
    type Query {
        getUsers(Uid: Int!):usersRes
    },
    type Mutation {
        addUser(Username:String!,Password:String!,Mail:String!):mutationRes
        modifyUser(Username:String,Password:String,Headimg:String,Mail:String):mutationRes
    }
`)

var root = {
    getUsers:async({Uid})=>{
        return await query(`select Uid,Username,Password,Headimg,Mail from users where Uid=${Uid};`)
            .then(rtn=>{
                return {
                    res:0,
                    data:rtn
                }
            })
            .catch(err=>{
                return {
                    res:-1,
                    errors:err,
                    data:{}
                }
            })
    },
    addUser:async({Username,Password,Mail})=>{
        let count = await query(`select count(1) as count from users where Mail='${Mail}'`)
            .then(res=>res[0].count)
        if(count>0){
            return await {res:-1,msg:'', errors:'该邮箱已注册'}
        }
        return await query(`insert into users(Username,Password,Mail) values (?,?,?);`,[Username,Password,Mail])
            .then(rtn=>{
                return {
                    res:0,
                    msg:'注册成功'
                }
            })
            .catch(err=>{return {res:-1,errors:err,msg:''}})
    },
    modifyUser:async({Username,Password,Headimg,Mail})=>{
        return await query(``)
             .then(rtn=>{
                return {
                    res:0,
                    msg:''
                }
            })
             .catch(err=>{
                return {
                    res:-1,
                    errors:err,
                    msg:''
                }
            })
    }
}

module.exports = app=>{
    app.use('/api/users',graphqlHTTP({
        schema:schema,
        rootValue:root,
        graphiql:true,
    }))
}