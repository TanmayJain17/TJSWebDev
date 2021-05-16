const express = require('express')
const app  = express()
const api = require('./routes/api')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/public',express.static(__dirname +'/public'))
app.use('/api',api)

app.listen(4455,()=>{
    console.log('listening on port http://localhost:4455')
})