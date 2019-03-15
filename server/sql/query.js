const {pool} = require('./connect');  
let query = function(sql){
    return new Promise(( resolve ,reject) => {
        // connectStart();
        pool.query(sql,(err,rows)=>{
            if (err) {
                reject(err);
                console.log('[query] - :' + err);
                return;
            }
            console.log(rows)
            resolve( rows )
        });
        // connectEnd();
    })
}

 module.exports = query