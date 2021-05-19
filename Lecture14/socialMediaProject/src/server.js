const express = require('express')
const { db } = require('./db/model')
const path = require('path')
const userRoute = require('./routes/users/index')
const postRoute = require('./routes/posts/index')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api/users',userRoute)
app.use('/api/posts',postRoute)

db.sync({alter: true})
.then(()=>{
    app.listen(4747,()=>{
        console.log('server started on http://localhost:4747')
    })
})
.catch((err)=>{
    console.error(err)
})