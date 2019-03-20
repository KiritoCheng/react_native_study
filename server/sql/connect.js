//mysql.js
var mysql = require('mysql'); //调用MySQL模块
//创建一个connection

 const pool = mysql.createConnection({
    host: '47.102.121.206', //主机
    user: 'root',     //数据库用户名
    password: '123456',     //数据库密码
    port: '3306',       
    database: 'commodity', //数据库名称
    charset: 'UTF8_GENERAL_CI' //数据库编码
});

module.exports ={pool}