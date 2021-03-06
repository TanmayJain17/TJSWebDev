const express = require('express')
const app = express()



app.get('/hello',(req,res)=>{

    let name = 'Guest'
    if(req.query.name){
        name = req.query.name
    }
    res.send('HelloWorld '+ name)
})

//console.log((__dirname +'./public'))

app.use('/xyz',express.static(__dirname +'/public'))

app.listen(4012,()=>{
    console.log('server starrted at http://localhost:4012')
})
