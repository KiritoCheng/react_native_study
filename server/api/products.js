var graphqlHTTP = require('express-graphql');
var {buildSchema} = require('graphql');
let query = require('../sql/query.js');

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
        error:String
        data:[productsTypes],
    },
    type Query {
        products:productsRes
    }
`)

var root = {
    products:async ()=>{
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
                    error:err,
                    data:[]
                }
            })
    }
}

module.exports = (app)=>{
    app.use('/api/products',graphqlHTTP({
        schema:schema,
        rootValue:root,
        graphiql:true,
    }))
}