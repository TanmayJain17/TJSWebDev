const route = require('express').Router();
const db = require('./dblink')

route.get('/',(req, res) =>{
    db.getAllUsers()
    .then((persons)=>{
        res.send(persons)
    })
    .catch((err)=>{
        res.send(err)
    })
})

route.post('/',(req, res) =>{
    db.addNewPerson(req.body.name,req.body.age,req.body.city)
    .then(()=>{
        res.redirect('/api')
    })
    .catch((err)=>{
        res.send(err)
    })
})
module.exports = route