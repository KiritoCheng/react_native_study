
var graphqlHTTP = require('express-graphql');
var {buildSchema} = require('graphql')

var schema = buildSchema(`
    type Query {
        hello:String
    }
`)

var root ={
    hello:()=>{
        return '中文测试 World!';
    }
}

module.exports = (app)=>{
    app.use('/api/test',graphqlHTTP({
        schema:schema,
        rootValue:root,
        graphiql:true,
    }))
}