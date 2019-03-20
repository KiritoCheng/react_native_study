var graphqlHTTP = require('express-graphql');
var {buildSchema} = require('graphql');
let query = require('../sql/query.js');

// const productsTypes=`{
//     ID: Int
//     name:String
//     price:String
//     cost:String
//     description:String
//     img:String
//     update_time:String
// }`

// const resSchema = `interface resSchema{
//     res:Int
//     err:String
// }`
// const productsTypes = ``

// `
// type productsTypes{
//             ID: Int
//             name:String
//             price:String
//             cost:String
//             description:String
//             img:String
//             update_time:String
//     }
var schema = buildSchema(`

    type productsTypes{
        ID: Int
        name:String
        price:String
        cost:String
        description:String
        img:String
        update_time:String
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
        // ID | name   | price  | cost  | description  | img  | update_time 
        return await query(`select ID,name,price,cost,description,img,update_time from product_list_tbl`)
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