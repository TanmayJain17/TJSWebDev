const Sequelize = require('sequelize')

const Model = Sequelize.Model
const db = new Sequelize('userauthenticatedb','authenticateuser','authenticatepass',{
    dialect:'mysql',
    host:'localhost'
})



module.exports = {db,Model}

