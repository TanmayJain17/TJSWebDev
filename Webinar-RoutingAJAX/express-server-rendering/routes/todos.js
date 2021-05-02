const route = require('express').Router()

let todos = [{task:'my first task'}, {task:'my second task'}]

route.get('/',(req, res) =>{
    res.render('todos',{todos})
})
route.post('/',(req,res)=>{
    todos.push({
        task: req.body.newtodo
    })

    res.redirect('todos')
})


module.exports = route