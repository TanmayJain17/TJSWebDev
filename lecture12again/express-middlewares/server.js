const express = require('express')
const app = express()

app.use('/',express.static(__dirname + '/public'))
app.get('/eval',(req,res)=>{
    res.send("========Result========")
})
app.listen(4545,()=>{
    console.log('server started on http://localhost:4545')
})