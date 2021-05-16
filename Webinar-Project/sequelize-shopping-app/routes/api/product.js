const route = require('express').Router()
const {Product} = require('../../dbs/model')

function allowClients(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
}

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
    
    if(isNaN(req.body.price)){
        return res.status(403).send({
            error:'product price is not a number'
        })
    }
   
    try{
        
        let newProdDetails = await Product.create({
            name:req.body.name,
            manufacturer:req.body.manufacturer,
            price:parseFloat(req.body.price)
        })
        console.log('posted product details')
        res.status(201).send(newProdDetails)
    }
    catch(err){
        console.log('error in posting details')
        res.status(501).send(err)
    }
}

route.get('/',allowClients,getProductDetails)
route.post('/',allowClients,addProductDetails)

module.exports = route 