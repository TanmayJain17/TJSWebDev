const Sequelize = require('sequelize')
const db = new Sequelize('mysampledb','mysampleuser','mysamplepass',{
    host: 'localhost',
    dialect:'mysql'
})

 //returns promise
  db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });