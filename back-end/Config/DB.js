const mysql = require('mysql2');

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'cmpao',
    port: "8889",
});

mysqlConnection.connect((err) => {
    if (!err)
        console.log('Connection DB Successfully');
    else
        console.log('Connection Failed!' + JSON.stringify(err, undefined, 2));
});
module.exports = {
    mysqlConnection
}

