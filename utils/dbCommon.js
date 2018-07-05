/**
 * 封装 `mysql`连接
 * @type {{}}
 */

const db = {};
const mysql = require('mysql');
const pool = mysql.createPool({
  connectionLimit : 10,
  host            : '47.92.6.41',
  user            : 'root',
  password        : '199358',
  database        : 'mysql'
});

db.query = function(sql, callback) {
  if(!sql) {
    callback();
    return
  }
  
  pool.query(sql, function(err, rows, fields) {
    if (err) {
      console.log(err);
      callback(err, null);
      return;
    };
  
    callback(null, rows, fields);
  });
}

export default db;