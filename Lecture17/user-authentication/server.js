const express = require('express')
const app = express()
const path = require('path')
const session = require('express-session')
const {db} = require('./db/model')
const signUp = require('./routes/signup')
const logIn = require('./routes/login')
const profile = require('./routes/profile')

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
app.use('/api/login',logIn)
app.use('/api/profile',profile)
app.get('/logout',(req,res)=>{
    req.session.user = null
    //req.session.destroy()
    res.render('login')
})

db.sync({alter: true})
.then(()=>{
    app.listen(5647,()=>{
        console.log('listening on http://localhost:5647')
    })
})
.catch((err)=>{
    console.log(err)
})
