const express = require('express')
const app = express()
const db = require('./db')

app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.set('view engine', 'hbs')

app.get('/', (req, res) =>{

    db.getAllUsers()
        .then((persons)=>{
            res.render('persons',{persons})
        })
        .catch((err)=>{
            res.send(err)
        })
    
    
})
app.get('/add', (req, res) =>{
    res.render('persons_add',{})
})
app.post('/add', (req, res) =>{
    db.addNewPerson(req.body.name, req.body.age,req.body.city)
    .then(()=>{
        res.redirect('/')
    })
    .catch((err)=>{
        console.log('error')
        res.send(err)
    })
})
app.listen(5566,()=>{
    console.log('listening on port http://localhost:5566')
})