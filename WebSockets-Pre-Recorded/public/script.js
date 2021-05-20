let socket = io()
let body = document.getElementsByTagName('body')
let btnBoom = document.getElementById('btnBoom')

btnBoom.onclick = ()=>{
    socket.emit('Boom')
}
socket.on('bhag',()=>{
    let div = document.createElement('div')
    div.innerText='Bhaag'
    body.appendChild(div)
})