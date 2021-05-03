const express = require('express');
const app = express()
const todoRoute = require('./route/todos')

app.use(express.json())     //this is for req.body usage
app.use(express.urlencoded({ extended: true}))
app.use('/public',express.static(__dirname + '/public'))

app.use('/todos', todoRoute)

app.listen(4324,()=>{
    console.log('server started on http://localhost:4324')
})