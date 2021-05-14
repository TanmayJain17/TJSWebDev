const route = require('express').Router()
const {User} = require('../../dbs/model')

findAllUser = async (req, res, next)=>{
    try{
        const userData = await User.findAll({})
        console.log('got user data')
        res.status(200).send(userData)
    }
    catch(err){
        console.log('error in getting data')
        res.status(500).send(err)
    }
}

addNewUser = async (req, res, next)=>{
    try{
        let newName = req.body.postName
        const newUser = await User.create({
            name:newName
        })
        console.log('posted user name')
        res.status(201).send(newUser)
    }
    catch(err){
        console.log('error in entering data')
        res.status(501).send(err)
    }
}

route.get('/',findAllUser)
route.post('/',addNewUser)
module.exports = route