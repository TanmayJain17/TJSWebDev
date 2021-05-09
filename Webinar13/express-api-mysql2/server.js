const express = require('express')
const app = express()
const api = require('./routes/api.js')
//const dblink = require('./routes/dblink.js')

app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use('/public',express.static(__dirname + '/public'))

app.use('/api',api)
//app.use('/dblink',dblink)


app.listen(4244,()=>{
    console.log('server started on http://localhost:4244/public')
})