let inptBox = document.getElementById('inptBox')
let btnPrint = document.getElementById('btnPrint')
let list = document.getElementById('list')

var N = parseInt(inptBox.value)
    console.log(N)

btnPrint.onclick = function(){
    
    let start = Date.now()
    
    for(let i=1;i<=N;i++){

        let item = document.createElement('li')
        item.innerText = i
        list.appendChild(item)

    }

    console.log(Date.now()-start)
}