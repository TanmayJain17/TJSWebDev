const express = require('express')
const app = express()

app.listen(5555,()=>{
    console.log('server started @ 5555')
})
app.set('view engine' , 'hbs')

let task =[
    'sample task'
]
app.use(express.urlencoded({extended:true})) 

app.get('/',(req,res)=>{

    let taskList = task.map(t => `<li>${t}</li>`).join('\n')

    res.render('home',{
        title:'Todo List',
        task
    })
})

app.post('/',(req,res)=>{
    //res.send('new task added= '+ req.body.newTask)
    task.push(req.body.newTask)
    res.redirect('/')
})