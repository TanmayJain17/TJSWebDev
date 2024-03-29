const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user: 'myuser1',
    password: 'mypass1'
})

connection.query(
    `CREATE TABLE IF NOT EXISTS persons (
        id INTEGER AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        age INTEGER ,
        city VARCHAR(30)
    )`,
    function(err, results) {
        if (err) {
            console.error(err)
        } else {
            console.log("Table created successfully")
        }
        connection.close();
    }
)