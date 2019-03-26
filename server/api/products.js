var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
let query = require('../sql/query.js');
let { timeFormart } = require('../libs/time.js')

var schema = buildSchema(`
    type productsTypes{
        ID: Int
        Name:String
        Price:String
        Cost:String
        Description:String
        Img:String
        Update_time:String
    },
    type productsRes{
        res:Int,
        errors:String
        data:[productsTypes],
    },
    type Query {
        getProducts:productsRes
    },
    type Mutation {
        addProducts(Name:String!,Price:String,Cost:String,Description:String,Img:String):productsRes
    }
`)

var root = {
    getProducts:async ()=>{
        return await query(`select ID, Name, Price, Cost, Description, Img, Update_time from product_list_tbl`)
            .then((rtn)=>{
                return {
                    res:0,
                    data:rtn
                }
            })
            .catch((err)=>{
                return {
                    res:-1,
                    errors:err,
                    data:[]
                }
            })
    },
    addProducts:async({Name,Price,Cost,Description})=>{
         return await query(`insert into product_list_tbl (Name,Price,Cost,Description,Update_time) values 
            ('${Name}','${Price}','${Cost}','${Description}','${timeFormart(new Date())}');`)
            .then((rtn)=>{
                return {
                    res:0,
                    data:"OK"
                }
            })
            .catch((err)=>{
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