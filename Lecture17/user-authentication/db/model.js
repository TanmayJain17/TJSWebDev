const {db,Model} = require('./connection')
const dataTypes = require('sequelize').DataTypes

class Users extends Model{}
Users.init({
    id:{
        type:dataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    username:{
        type:dataTypes.STRING(30),
        allowNull:false,
    },
    email:{
        type:dataTypes.STRING(100),
        allowNull:false,
    },
    password:{
        type:dataTypes.STRING,
        allowNull:false,
    }
},{sequelize:db,modelName:'users'})

module.exports = {db,Users}