const route  = require('express').Router()
const {Users} = require('../../db/model')

route.get('/',(req, res) => {
    res.render('login')
})
 route.post('/',async (req, res) => {
    const users = await Users.findOne({
        where:{
            username: req.body.username
        }
    })
    if(!users){
        return res.status(404).render('login',{error:'Wrong username entered'})
    }
    if(users.password !== req.body.password){
        return res.status(401).render('login',{error:"Wrong Password"})
    }
    req.session.user = users.id;
        res.redirect('profile')
    

    
})

module.exports = route