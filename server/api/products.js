var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
let query = require('../sql/query.js');
let { timeFormart } = require('../libs/time.js')

var schema = buildSchema(`
    type productsTypes{
        ID: Int
        Name:String
        Price:Int
        Cost:Int
        Description:String
        Img:String
        Update_time:String
    },
    type productsRes{
        res:Int,
        errors:String,
        msg:String
        data:[productsTypes],
    },
    type Query {
        getProducts:productsRes
    },
    type Mutation {
        addProduct(Name:String!,Price:Int,Cost:Int,Description:String,Img:String):productsRes
        deleteProduct(ID:Int!):productsRes
        changeProduct(ID:Int!,Name:String,Price:Int,Cost:Int,Description:String,Img:String):productsRes
    }
`)

var root = {
    getProducts:async ()=>{
        return await query(`select ID, Name, Price, Cost, Description, Img, Update_time from product_list_tbl`)
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
                    data:[]
                }
            })
    },
    addProduct:async({Name,Price,Cost,Description,Img})=>{
         return await query(`insert into product_list_tbl (Name,Price,Cost,Description,Img,Update_time) values 
            (${Name},${Price||null},${Cost||null},${Description||null},${Img||null}'${timeFormart(new Date())}');`)
            .then(rtn=>{
                return {
                    res:0,
                    msg:'“Y‰Á¬Œ÷'
                }
            })
            .catch(err=>{
                return {
                    res:-1,
                    errors:err,
                }
            })

    },
    deleteProduct:async({ID})=>{
        return await query(`delete from product_list_tbl where ID=${ID};`)
            .then(rtn => {
                return {
                    res:0,
                    msg:'?œ¬Œ÷'
                }
            })
            .catch(err=>{
                return {
                    res:-1,
                    errors:err,
                }
            }) 
    },
    changeProduct:async({ID,Name,Price,Cost,Description,Img})=>{
        return await query(`update product_list_tbl 
            set Name='${Name||"Name"}',Price=${Price||"Price"},Cost=${Cost||"Cost"},Description='${Description||"Description"}',Update_time='${timeFormart(new Date())}'
            where ID=${ID};`)
            .then(rtn => {
                return {
                    res:0,
                    msg:'C‰ü¬Œ÷'
                }
            })
            .catch(err=>{
                return {
                    res:-1,
                    errors:err,
                }
            }) 
    }
}

module.exports = app=>{
    app.use('/api/products',graphqlHTTP({
        schema:schema,
        rootValue:root,
        graphiql:true,
    }))
}