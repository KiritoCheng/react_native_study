var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
let query = require('../sql/query.js');

var schema = buildSchema(`
    type Query {
        hello:String
    }
`)

var root = {
    hello: async() => {
        await query(`select title as test from test_tbl`)
            .then((res) => {
                let { test = '' } = res[0]
                return test;
            })
            .catch(() => {
                return ""
            })

    }
}

module.exports = (app) => {
    app.use('/api/test', graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    }))
}