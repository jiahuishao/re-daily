var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    port: '3306',
    user     : 'root',
    password : 'sjh020319',
    database : 'mysql',
});

connection.connect();

var sql = 'show global variables like \'port\'';

connection.query(sql,(err,result)=>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log(result);
    return;
})