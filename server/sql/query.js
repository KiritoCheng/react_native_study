const { connect } = require('./connect');
let query = function (sql, param) {
    return new Promise((resolve, reject) => {
        connect().then(connection => {
            // connected! (unless `err` is set) 
            // queries here, when all queries are finished you do connection.release() to return the connection back to the pool
            connection.query(sql, param, (err, rows) => {
                if (err) {
                    reject(err);
                    console.log('[sql] - :' + sql);
                    console.log('[query_err] - :' + err);
                    return;
                }
                resolve(rows)
                connection.end();
            });
        }).catch(err => {
            reject(err);
        })
    })
}

module.exports = query;