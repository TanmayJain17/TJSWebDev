const mysql = require('mysql2')



const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user: 'myuser1',
    password: 'mypass1'
})

connection.query(
    `SELECT * FROM persons`,
    function(err, rows,fields) {
        if (err) {
            console.error(err)
        } else {
            console.log(rows)
            console.log(fields)
            console.log('receiving data')
        }
        connection.close();
    }
)