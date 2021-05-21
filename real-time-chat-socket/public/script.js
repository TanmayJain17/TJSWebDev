let socket = io()
let logInBox = $('#logInBox')
let inptUserName = $('#inptUserName')
let inptPassword = $('#inptPassword')
let btnSendUserName = $('#btnSendUserName')
let chatBox = $('#chatBox')
let inptTo = $('#inptTo')
let inptMsg = $('#inptMsg')
let btnSendMsg = $('#btnSendMsg')
let ulList = $('#ulList')

logInBox.show()
chatBox.hide()

btnSendUserName.click(()=>{
    socket.emit('username',{
        username:inptUserName.val(),
        password:inptPassword.val()
    })
})

socket.on('logged_in',()=>{
    logInBox.hide()
    chatBox.show()
})
socket.on('login_failed',()=>{
    window.alert('Enter Valid Password')
})

btnSendMsg.click(()=>{
    socket.emit('newMsg',{
        to:inptTo.val(),
        msg:inptMsg.val()
    })
    
})
socket.on('msgRecv',(data)=>{
    let liItem = $('<li></li>').text(data.msg)
    ulList.append(liItem)
})



/* let inptMsg = document.getElementById('inptMsg')  //LEARNING TO EMIT, SOCKET.BROADCASRT,IO.BROADCAST
let btnSend = document.getElementById('btnSend')
let ulList = document.getElementById('ulList')


btnSend.onclick = function() {
    socket.emit('msgSend', {
        msg: inptMsg.value
    })

    
}
socket.on('msgRecv',(data)=>{
    
    let listItem = document.createElement('li')
    listItem.innerText = data.msg
    ulList.append(listItem)
}) */