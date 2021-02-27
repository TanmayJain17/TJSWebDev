let inptBox = document.getElementById('inptBox')
let btnPrint = document.getElementById('btnPrint')
let list = document.getElementById('list')

let N = parseInt(inptBox.value)
console.log(N)


btnPrint.onclick = function(){
    
    let start = Date.now()
    let li = ''
    for(let i=1 ; i<=N ; i++){
        
     //what is really happening   
        /*li += '<li>'+ i + '</li>'
        list.innerHTML = null 
        list.innerHTML += li*/

    //very bad to do this makes the program slow
        list.innerHTML += '<li>' + i + '</li>'
    }
    
    console.log(Date.now()-start)
}

