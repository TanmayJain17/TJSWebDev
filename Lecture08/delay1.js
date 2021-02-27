btnWait=document.getElementById('btnWait')
btnCount=document.getElementById('btnCount')
divStatus=document.getElementById('divStatus')
divValue=document.getElementById('divValue')

count=0
btnCount.onclick=function(){
    count++
    divValue.textContent=count
}

btnWait.onclick=function(){
    divStatus.textContent='Waiting'

   // after 5 sec
    start=Date.now()
    while(Date.now()<=start + 5000){/*do nothing*/}
   //setTimeout(change,5000)
    divStatus.textContent='Done'
}

function change(){
    divStatus.textContent='Done'
}
(1)
(2)