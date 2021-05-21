const express = require('express')
const http = require('http')
const socket = require('socket.io')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

const server = http.createServer(app)

const io = socket(server)

let users= {
    tjmax:'tj1234'
}
let socketMap = {}               //all the socketId to identify the sender
function joinEmit (s,u){
    s.join(u)
    s.emit('logged_in')
    socketMap[s.id] = u
    console.log(socketMap)
}


io.on('connection',(socket)=>{
    console.log('socket attatched on id=', socket.id)
    socket.on('username',(data)=>{
        if(users[data.username]){
            if (users[data.username] == data.password) {
                joinEmit(socket, data.username)
                /* socket.join(data.username)
                socket.emit('logged_in') */
            }
            else {
                socket.emit('login_failed')
            }
        }
        else {
            users[data.username] = data.password
            console.log(users)
            joinEmit(socket, data.username)
                /* socket.join(data.username)
                socket.emit('logged_in') */
            
        }
        
    })

    socket.on('newMsg',(data)=>{
        if(data.to){
            io.to(data.to).emit('msgRecv',{
                msg:`${socketMap[socket.id]}: ${data.msg}` 
            })
        }
        else{
            socket.broadcast.emit('msgRecv',{
                msg:`${socketMap[socket.id]}: ${data.msg}`
            })
        }
    })
    
    
    /* socket.on('msgSend',(data)=>{
        console.log(data.msg)
        io.emit('msgRecv',{
            msg: data.msg
        })
    }) */
    
})


server.listen(4566,()=>{
    console.log('listening on http://localhost:4566')
})