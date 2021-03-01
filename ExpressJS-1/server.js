const express = require('express')

//console.log(typeof express)

const app = express()
app.use(express.urlencoded({extended:true}))      //ye bakwas nahi samjh aaya

app.get('/',(req,res) =>{

    res.send('Hello World')

})// res: response
app.get('/greet',(req,res) =>{
    
    
    let person = 'Guest'
    if(req.query.person){
        person = req.query.person
    }
    res.send('Good Morning ' +person)

})
app.post('/greet',(req,res) =>{
    
    //console.log(req.query)
    console.log(req.body)
    let person = 'Guest'
    if(req.body.person){
        person = req.body.person
    }
    res.send('Good Evening ' +person)

})
app.get('/form1',(req,res) =>{
    
    //console.log(req.query)
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form>
        <input>
        <input>
        <button type="submit">SUBMIT</button>
    </form>
</body>
</html>`)

})

app.get('/form2',(req,res) =>{
    
    //console.log(req.query)
    res.sendFile(__dirname + '/files/form.html')

})
//using params ....do not use same type twice or more
/*app.get('/:name/:age',(req,res) =>{
    
    //console.log(req.query)
    res.send('Hello '+ req.params.name +' you are ' + req.params.age + ' years old (oldie :))')

})*/
app.get('/:city/:greeting',(req,res) =>{
    
    //console.log(req.query)
    res.send( req.params.greeting +' to ' + req.params.city  )

})

app.listen(4444 , () =>{
    console.log('server started on http://localhost:4444')
})    //4444 is the port number always use port number greater than 1024 as 0-1024 are reserved ports
