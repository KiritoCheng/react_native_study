//mysql.js
var mysql = require('mysql'); //调用MySQL模块
//创建一个connection

 const pool = mysql.createConnection({
    host: '47.102.121.206', //主机
    user: 'root',     //数据库用户名
    password: '123456',     //数据库密码
    port: '3306',       
    database: 'test', //数据库名称
    charset: 'UTF8_GENERAL_CI' //数据库编码
});

const connectStart=()=>{
    pool.connect((err)=>{
        if (err) {
            console.log('[connect] - :' + err);
            return;
        }
        //如果连接成功 控制台输出 success 了
        console.log('[connection connect]  succeed!'); 
    });
}
const connectEnd=()=>{
    pool.end((err)=>{
        if (err) {
            console.log('[disconnect] - :' + err);
            return;
        }
        //如果连接成功 控制台输出 success 了
        console.log('[connection disconnect]  succeed!'); 
    });
}

module.exports ={pool,connectStart,connectEnd}