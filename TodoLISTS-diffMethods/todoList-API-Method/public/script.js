$(
    function () {
        let newtask = $('#newtask')
        let addBtn = $('#addBtn')
        let ulList = $('#ulList')

        addBtn.click(function () {

            let newTodo = newtask.val()
            console.log(newTodo)


            $.post('/todos/',
                { task: newTodo }, (data) => {
                    ulList.empty()
                    console.log(data)

                    for (newTask of data) {
                        ulList.append(`<li>` + newTask.task + `</li>`)
                    }
                }
            )
        })
    }
)
