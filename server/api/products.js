var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
let query = require('../sql/query.js');
let { timeFormart } = require('../libs/time.js')

var schema = buildSchema(`
    interface res{
        res:Int
        errors:String
    },
    type productsTypes{
        ID: ID
        Name:String
        Price:Float
        Cost:Float
        Description:String
        Img:String
        Update_time:String
    },
    type productsRes implements res{
        res:Int,
        errors:String,
        data:[productsTypes],
    },
    type mutationRes implements res {
        res:Int
        errors:String
        msg:String
    },
    type Query {
        getProducts:productsRes
    },
    type Mutation {
        addProduct(Name:String!,Price:Float,Cost:Float,Description:String,Img:String):mutationRes
        deleteProduct(ID:Int!):mutationRes
        modifyProduct(ID:Int!,Name:String,Price:Float,Cost:Float,Description:String,Img:String):mutationRes
    }
`)

var root = {
    getProducts: async() => {
        return await query(`select ID, Name, Price, Cost, Description, Img, Update_time from product_list_tbl;`)
            .then(rtn => {
                return {
                    res: 0,
                    data: rtn
                }
            })
            .catch(err => {
                return {
                    res: -1,
                    errors: err,
                    data: []
                }
            })
    },
    addProduct: async(productInfo) => {
        const { Name, Price, Cost, Description, Img } = productInfo;
        let sql = `insert into product_list_tbl (Name,Price,Cost,Description,Img,Update_time) values (?,?,?,?,?,'${timeFormart(new Date())}');`
        let param = [Name, Price || null, Cost || null, Description || null, Img || null];
        return await query(sql, param)
            .then(rtn => {
                return {
                    res: 0,
                    msg: '添加成功'
                }
            })
            .catch(err => {
                return {
                    res: -1,
                    errors: err,
                }
            })
    },
    deleteProduct: async({ ID }) => {
        return await query(`delete from product_list_tbl where ID=${ID};`)
            .then(rtn => {
                return {
                    res: 0,
                    msg: '删除成功'
                }
            })
            .catch(err => {
                return {
                    res: -1,
                    errors: err,
                }
            })
    },
    modifyProduct: async({ ID, Name, Price, Cost, Description, Img }) => {
        return await query(`update product_list_tbl 
            set Name='${Name||"Name"}',Price=${Price||"Price"},Cost=${Cost||"Cost"},Description='${Description||"Description"}',Update_time='${timeFormart(new Date())}'
            where ID=${ID};`)
            .then(rtn => {
                return {
                    res: 0,
                    msg: '修改成功'
                }
            })
            .catch(err => {
                return {
                    res: -1,
                    errors: err,
                }
            })
    }
}

module.exports = app => {
    app.use('/api/products', graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    }))
}