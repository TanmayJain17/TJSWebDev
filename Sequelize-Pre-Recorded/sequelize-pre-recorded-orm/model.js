const Sequelize = require('sequelize')
const db = new Sequelize('mysampledb','mysampleuser','mysamplepass',{
    host: 'localhost',
    dialect:'mysql'
})

const DataType = Sequelize.DataTypes

 const Student = db.define('Student',{
     Name:{
        type:DataType.STRING(40),
        allowNull:false
    },
     Age:{
         type:DataType.INTEGER(2),
         allowNull:false,
         defaultValue:-1
    }
 })

db.sync()
.then(()=>{
    console.log('table created')
})
.catch((err)=>{
    console.error(err)
})

 module.exports = {
     db,
     Student
 }