const {pool} = require('./connect');  
let query = function(sql,param){
    return new Promise(( resolve ,reject) => {
        pool.query(sql,param,(err,rows)=>{
            if (err) {
                reject(err.sqlMessage);
                console.log('[sql] - :' + sql);
                console.log('[query] - :' + err);
                return;
            }
            resolve(rows)
        });
    })
}

module.exports = query;