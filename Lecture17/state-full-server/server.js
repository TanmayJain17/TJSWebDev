const express = require('express')
const app = express()
const expressSessions = require('express-session')
const path = require('path')

app.set('view engine', 'hbs')
app.set('views',path.join(__dirname ,'/views'))
app.use(expressSessions({
    secret: 'keyboard cat',    //any long random string which signs the cookie
    resave: true,          //saves the cookie after each clien <-> server communication
    saveUninitialized: true, //for aggressive tracking//initilaize for first time if true
    secure: true,
    sameSite: false,
    name:"firstCookieSession"
     
  }))

app.get('/',(req, res) =>{
    console.log(req.session)
    if(!req.session.visits){
        req.session.visits=1;
    }
        
    else{
        req.session.visits++
    }
    res.render('index',{count:+(req.session.visits)})
})
app.listen(4544,()=>{
    console.log('session started on http://localhost:4544')
})