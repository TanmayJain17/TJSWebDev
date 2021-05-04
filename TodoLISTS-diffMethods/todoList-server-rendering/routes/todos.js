const route = require('express').Router()

let todoArray = [
    {task:'firsttask'},
    {task:'secondtask'}
]

route.get('/',(req,res)=>{
    res.render('todos',{todoArray})         //res.render('template to be rendered','data to be sent to the template')
})
route.post('/',(req,res)=>{
    todoArray.push(
        {task:req.body.newTask}
        )

        res.redirect('./todos')                          //remember to mention the correct path ./todos to redirect
    })

module.exports = route