/**
 * Created by zdsoft on 14-7-4.
 */
var mysql      = require('mysql');

var db = function(){

};

db.prototype.connect = function(){

  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : ''
  });

  connection.connect();

  connection.query('SELECT * from youyiku.user_info', function(err, rows, fields) {
    if (err) throw err;

    console.log('The solution is: ', rows[0].solution);
  });

  connection.end();
};