const http = require('http')               //http server created
const express = require('express')
const socket = require('socket.io')        //socket function required on the server side
const app = express()
const path = require('path')
const server = http.createServer(app)                  // express server app created on the http server

const io = socket(server)                 //giving the functionality (of sockets) to our server

app.use(express.static(path.join(__dirname, '/public')))

io.on('connection',(socket)=>{
    console.log('connection created on id= ',socket.id)

    socket.on('Boom',()=>{
        console.log('Corona has been boomed by id= ',socket.id)
    })
    
        setInterval(()=>{
            socket.emit('bhag')
        },2000)
    
    
})

server.listen('5545',()=>{
    console.log('listening on http://localhost:5545')
})