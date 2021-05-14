const Sequelize = require('sequelize');
const db = new Sequelize('shopdb','shopper','shoppass',{
    host: 'localhost',
    dialect:'mysql'
})
const Model = Sequelize.Model

db.authenticate()
.then(()=>{
    console.log('connected')
})
.catch((err)=>{
    console.error(err)
})
module.exports={db,Model}