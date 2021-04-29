const express = require('express')

const app = express()
app.use('/xyz',express.static(__dirname + '/public')) //mounting the public folder to the xyz path

app.get('/hello',(req,res)=>{
    res.send('Hello World')
})

app.listen(4321,()=>{
    console.log('server started on http://localhost:4321')
})
