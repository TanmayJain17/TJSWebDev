const express = require('express')
const http = require('http')
const socket = require('socket.io')
const app = express()
const server = http.createServer(app)
const io = socket(server)
const path = require('path')

app.use('/',express.static(path.join(__dirname, '/public')))

io.on('connection',(socket)=>{
    console.log('socket connected on => ', socket.id)

    socket.on('colorit',(data)=>{
        io.emit('colorit', data)
    })
})

server.listen(4788,()=>{
    console.log('server started on http://localhost:4788')
})