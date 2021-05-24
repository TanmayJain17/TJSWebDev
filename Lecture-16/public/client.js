let socket = io()

/* console.log(socket.id) */


function paintIt (color){
    document.querySelector(`.${color}`).style.backgroundColor = color
    setTimeout(()=>{
        document.querySelector(`.${color}`).style.backgroundColor = null
    },500)
}

let btnSelect = document.getElementById('btnSelect')
btnSelect.onclick = function(){
    let color = document.getElementById('selectColour').value
    socket.emit('colorit',{color})
    
}
socket.on('colorit',(data)=>{
    paintIt(data.color)
})

  