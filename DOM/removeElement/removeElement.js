let inptTask = document.getElementById('inptTask')
let addTask = document.getElementById('addTask')
let todoList = document.getElementById('todoList')



addTask.onclick = function(){
   
   let li = document.createElement('li')
   
   /*Entering the data in  the list */
   let todoItem = document.createElement('span')
   todoItem.innerText = inptTask.value
   
   /*creating the delete button*/
   let xbtn = document.createElement('button')
   xbtn.innerText = '✖'
   xbtn.onclick = function(ev){
        
        //ev.target = xbtn
        //ev.target.parentElement = li item
        //ev.targe.parentElement.parentElement = the ul (todoList)
        ev.target.parentElement.remove()
   }

   /*creating up button (using insertBefore)*/
   let upbtn = document.createElement('button')
   upbtn.innerText = '⬆️'
   upbtn.onclick = function(ev){
       ev.target.parentElement.parentElement.insertBefore(ev.target.parentElement , ev.target.parentElement.previousElementSibling )
   }

   /*creating down button (using insertBefore)*/
    let downbtn = document.createElement('button')
    downbtn.innerText = '⬇️'
    downbtn.onclick = function(ev){
        ev.target.parentElement.parentElement.insertBefore(ev.target.parentElement.nextElementSibling , ev.target.parentElement )
    }

   
   
   li.appendChild(xbtn)
   li.appendChild(downbtn)
   li.appendChild(upbtn)
   li.appendChild(todoItem)
   todoList.appendChild(li)

    
}