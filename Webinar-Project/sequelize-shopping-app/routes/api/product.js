const route = require('express').Router()
const {Product} = require('../../dbs/model')

getProductDetails = async (req, res,next)=>{
    try{
        let prodDetails =await Product.findAll({})
        console.log('got product details')
        res.status(200).send(prodDetails)
    }
    catch(err){
        console.log('error in getting details')
        res.status(500).send(err)
    }
}
addProductDetails = async (req, res,next)=>{
    
    if(isNaN(req.body.prodPrice)){
        return res.status(403).send({
            error:'product price is not a number'
        })
    }
    try{
        let newProdDetails = await Product.create({
            name:req.body.prodName,
            manufacturer:req.body.facName,
            price:parseFloat(req.body.procPrice)
        })
        console.log('posted product details')
        res.status(201).send(newProdDetails)
    }
    catch(err){
        console.log('error in posting details')
        res.status(501).send(err)
    }
}

route.get('/',getProductDetails)
route.post('/',addProductDetails)

module.exports = route 