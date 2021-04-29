const express = require('express')

const app = express()
app.use('/xyz',express.static(__dirname + '/public')) //mounting the public folder to the xyz path

app.get('/hello',(req,res)=>{
    user = 'Guest'
    if(req.query.user){
        user = req.query.user
    }
    res.send('Hello World '+ user)
})

app.listen(4321,()=>{
    console.log('server started on http://localhost:4321')
})
