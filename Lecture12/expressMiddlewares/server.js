const express = require('express')
const app = express()

function m1 (res,req,next){
    console.log('running pre m1')
    next()
    console.log('running post m1')
}
function m2 (res,req,next){
    console.log('running pre m2')
    next()
    console.log('running post m2')
}
function m3 (res,req,next){
    console.log('running pre m3')
    next()
    console.log('running post m3')
}
function m4 (res,req,next){
    console.log('running pre m4')
    next()
    console.log('running post m4')
}
function m5 (res,req,next){
    console.log('running pre m5')
    next()
    console.log('running post m5')
}





app.get('/hello',m1,m2,m4,m3,m5,(req,res)=>{

    
    res.send('HelloWorld ')
})

//console.log((__dirname +'./public'))



app.listen(4112,()=>{
    console.log('server starrted at http://localhost:4112')
})