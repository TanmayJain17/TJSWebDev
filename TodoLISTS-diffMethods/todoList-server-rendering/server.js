const express = require('express')
const app = express()
const todoRoute = require('./routes/todos')

app.use(express.json())                                
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'hbs')                          //sets the rendering engine/template enfgine as handlevars
app.set('views', __dirname + "/views")                 //sets the path to our views folder

app.use('/todos',todoRoute)

app.listen(4589,()=>{
    console.log('server started on http://localhost:4589')
})