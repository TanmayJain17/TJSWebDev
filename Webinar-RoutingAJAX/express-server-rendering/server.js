const express = require('express')
const todoRoute = require('./routes/todos')

const app = express();

app.set('view engine', 'hbs')
app.set('views', __dirname + "/views")
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/todos', todoRoute)

app.listen(4323,()=>{
    console.log('listening on port http://localhost:4323')
})