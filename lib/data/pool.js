/**
 * Created by zdsoft on 14-7-4.
 */
var mysql = require('mysql');

var pool = mysql.createPool({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '',
  database: 'youyiku'
});

module.exports = pool;