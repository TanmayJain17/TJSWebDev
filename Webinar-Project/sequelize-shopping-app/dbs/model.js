const {db,Model} = require('./connect')
const {DataTypes} = require('sequelize')

class User extends Model {}
User.init({
    name:{
        type:DataTypes.STRING(30),
        allowNull:false
    }
},{sequelize:db,modelName:'users'})

class Product extends Model {}
Product.init({
    name:{
        type:DataTypes.STRING(30),
        allowNull:false
    },
    manufacturer:{
        type:DataTypes.STRING(45)
    }, 
    price:{
        type:DataTypes.FLOAT,
        allowNull:false
    }
},{sequelize:db,modelName:'products'})

db.sync({alter:true})
module.exports = {db,Product,User}
