const express = require('express')
const app = express();
const todoRoute = require('./routes/todos')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/hello', function (req, res) {
    res.send("Hello")
})

app.use('/public', express.static(__dirname + "/public"))

app.use('/todos', todoRoute)

app.listen(4567,()=>{
    console.log('server started on port http://localhost:4567')
});