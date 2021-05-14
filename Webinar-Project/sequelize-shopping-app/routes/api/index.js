const route = require('express').Router()
const product = require('./product')
const user = require('./user')

route.use('/product',product)
route.use('/user',user)
module.exports = route