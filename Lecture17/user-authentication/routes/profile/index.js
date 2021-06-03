const route  = require('express').Router()
const {Users} = require('../../db/model')

route.get('/',async (req, res) => {
    if(!req.session.user){
        return res.redirect('login')
    }
    const users = await Users.findByPk(req.session.user)
    res.status(200).render('profile',{user:users})
})
/* route.post('/',async (req, res) => {
    const users = await Users.create({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password  //in reality we save hash of passwords
    })
    res.status(201).send(`User no. ${users.id} created`)
}) */

module.exports = route