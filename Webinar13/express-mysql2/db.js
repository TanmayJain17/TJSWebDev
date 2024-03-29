const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user: 'myuser1',
    password: 'mypass1'
})

function getAllUsers(){
    return new Promise((resolve, reject)=>{
        connection.query(
            `SELECT * FROM persons`,
            function(err, rows,cols){
                if(err){
                    reject(err)
                }
                else{
                    resolve(rows)
                }
            }
        )
    })
}
function addNewPerson(name, age, city) {

    return new Promise (function(resolve, reject) {
        connection.query(
            `INSERT INTO persons (name, age, city) VALUES (?, ?, ?)`,
            [name, age, city],
            function(err, results) {
                if (err) {
                    reject(err)
                } else {
                    resolve()
                }
            }
        )
    })
}

module.exports = {
    getAllUsers,
    addNewPerson
}
        
    
