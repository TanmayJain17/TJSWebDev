let inpNum = document.getElementById('inpNum')
let btnPrint = document.getElementById('btnPrint')
let numList = document.getElementById('numList')

btnPrint.onclick = function(){
  let start = Date.now()
  numList.innerHTML=''   //dom

  let i,ch3=0,ch5=0
  for(i=1;i<=inpNum.value;i++)
  {
     let li=document.createElement('li') 
     ch3++
     ch5++      //dom

     let print=""
     if(ch3==3/*i^3==0*/){
        ch3=0
        print += 'fizz'
     } 
     if(ch5==5/*i%5==0*/) {
        ch5=0
        print += 'buzz'
     }
     if(print==='') print += i

     li.textContent=print                          //dom

     numList.appendChild(li)                        //dom
  }
  console.log('time taken->', Date.now()- start)
}