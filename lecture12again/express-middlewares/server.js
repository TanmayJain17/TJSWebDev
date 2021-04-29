const express = require('express')
const app = express()

/*function m1(req,res,next){
    console.log('middleware1')
    next()
}
function m2(req,res,next){
    console.log('middleware2')
    next()
}
function m3(req,res,next){
    console.log('middleware3')
    next()
}
function m4(req,res,next){
    console.log('middleware4')
    next()
}
function m5(req,res,next){
    console.log('middleware5')
    next()
}*/
function m1(req,res,next){
    console.log('pre m1')
    next()
    console.log('post m1')
}
function m2(req,res,next){
    console.log('pre m2')
    next()
    console.log('post m2')
}
function m3(req,res,next){
    console.log('pre m3')
    next()
    console.log('post m3')
}

app.get('/hello',m1,m2,m3,(req,res)=>{
    console.log('pre send')
    res.send('Hello World')
    console.log('post send')
})
app.listen(4324,()=>{
    console.log('server started on http://localhost:4324')
})