
var graphqlHTTP = require('express-graphql');
var {buildSchema} = require('graphql');
let query = require('../sql/query.js');

var schema = buildSchema(`
    type Query {
        hello:String
    }
`)

var root ={
    hello: async () => {
        let rows =await query(`select title as test from test_tbl`)
        let {test=''} = rows[0]
        return test;
    }
}

module.exports = (app)=>{
    app.use('/api/test',graphqlHTTP({
        schema:schema,
        rootValue:root,
        graphiql:true,
    }))
}