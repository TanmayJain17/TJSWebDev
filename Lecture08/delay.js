let btnWait=document.getElementById('btnWait')
let btnCount=document.getElementById('btnCount')
let divStatus=document.getElementById('divStatus')
let divVal=document.getElementById('divVal')

let count=0
btnCount.onclick= function(){
    count++
    console.log('count',count)
    divVal.textContent=count
}
let delayInMilliSec=5000
function x()
{}

btnWait.onclick=function(){

    divStatus.textContent='Waiting'
    console.log('waiting')
    
   // let start=Date.now()
   // while(Date.now() < (start+ 5000)){ /*do nothing*/}
   setTimeout(status, 5000);
   // setTimeout(function() {}, 5000);
   function status(){
    divStatus.textContent='Done'
    console.log('done')
   } 
}

