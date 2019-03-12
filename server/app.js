const express = require('express')
var cookieParser = require('cookie-parser');//这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象。
var bodyParser = require('body-parser');//node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据。
var path = require('path');
const app = express()
const port = 3000;

// 载入中间件
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//加载静态资源
// app.use(express.static(path.join(__dirname, '../public/dist'))); web用
app.use('./static', express.static(path.join(__dirname, './static/')));


//allow custom header and CORS
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

var test = require('./api/test.js')
test(app)

var server = app.listen(port, ()=>{
    var host = server.address().address
    var port = server.address().port
    host = host == '::' ? "localhost" : host;
    console.log(`Example app listening on ${host}:${port}!`)
})

