const {pool} = require('./connect');  
let query = function(sql){
    return new Promise(( resolve ,reject) => {
        pool.query(sql,(err,rows)=>{
            if (err) {
                reject(err.sqlMessage);
                console.log('[query] - :' + err);
                return;
            }
            resolve(rows)
        });
    })
}

module.exports = query;