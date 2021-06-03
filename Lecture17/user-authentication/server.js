const express = require('express')
const app = express()
const path = require('path')
const session = require('express-session')
const {db} = require('./db/model')
const signUp = require('./routes/signup')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.set('view engine','hbs')
app.set('views',path.join(__dirname,'/views'))

app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:"some random string",
    sameSite:false,
    secure:true,
    name:'userAuthentication'
}))

app.use('/api/signup',signUp)

db.sync({alter: true})
.then(()=>{
    app.listen(5647,()=>{
        console.log('listening on http://localhost:5647')
    })
})
.catch((err)=>{
    console.log(err)
})
