$(function(){
    let newTodoBox = $('#newtodo')
    let addTododBox = $('#addtodo')
    let todoList = $('#todolist')

    addTododBox.click(function(){
        let newTodo = newTodoBox.val()
        //console.log(newTodo)
        $.post('/todos/',
        {task: newTodo},
        function(data){
            //console.log(data) returns the array 
            todoList.empty()
            for(todo of data){
                todoList.append('<li>'+ todo.task+ '</li>')
            }
        })
    })
})
