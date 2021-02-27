//alert('Enter Spin Speed')
var value1 = document.getElementById('value1')
var value2 = document.getElementById('value2')
var value3 = document.getElementById('value3')
//let value = document.getElementsByClassName('value')
let btnSpeed = document.getElementById('btnSpeed')
let startStop = document.getElementById('startStop')
let inpSpeed = document.getElementById('inpSpeed')
inpSpeed.defaultValue = '5'

let values = [
    '😀','😂'                                      /*'😇' ,'😉','😎','😏','😜'*/
]
function getRandomValue(){

    return values[Math.floor(Math.random() * 2)]

}
var animationId
function updateAnimation(newSpeed)
{
    if(animationId) clearInterval(animationId)
    animationId = setInterval(()=>{

        value1.textContent = getRandomValue()
        value2.textContent = getRandomValue()
        value3.textContent = getRandomValue()
    
    },(1000/ newSpeed))
    
    console.log(animationId)

}
console.log(animationId)
var speedEntered
var spEntered
var itSpeed
var tsc
var time

btnSpeed.onclick = function(){
    let readVal = inpSpeed.value
    if(readVal > 10 || readVal < 1) alert('Enter spin speed between 1 to 10')

    else{
    console.log('value changed', readVal)
    document.documentElement.style.setProperty('--speed',readVal)
    speedEntered = getComputedStyle(document.documentElement).getPropertyValue('--speed');
    console.log(speedEntered)     //ev.target.value
    spEntered = Number(speedEntered)  
    itSpeed =(1 / spEntered)
    let totalSpinCount = getComputedStyle(document.documentElement).getPropertyValue('--totalSpinCount');
    tsc = Number(totalSpinCount)
    time = itSpeed * tsc
    updateAnimation(readVal) //ev.target.value
    }

    btnSpeed.onclick = null;
       
}




//startStop.onclick = 
/*function playState()
{
    console.log('state changed')
    //document.getElementsByClassName('value').style.animationPlayState = "running";
    value1.style.animationPlayState = "running";
    value2.style.animationPlayState = "running";
    value3.style.animationPlayState = "running";
    //document.documentElement.style.setProperty('--set','running')
}*/

console.log(tsc)
console.log(itSpeed)
console.log(time)

function plauState(){
    
        console.log('plauState')
        value1.style.animationPlayState = "running";
        value2.style.animationPlayState = "running";
        value3.style.animationPlayState = "running";

        setTimeout(()=>{
            clearInterval(animationId)
        },time*1000)

        setTimeout(()=>{
            if(value1.textContent === value2.textContent && value1.textContent === value3.textContent)
            {
                alert('you win!!')
            }

            else{
                alert('you lose :(')
            }
        },time*1000+500)

        startStop.onclick = null;
    }

    function refreshPage(){
        window.location.reload();
    } 
        
        
    /*while(i <= num)
    {
        
        console.log(i)
        if(i < 5)
        {
            value1.style.animationDuration = "calc(1s/sp)";
            value2.style.animationDuration = "calc(1s/sp)";
            value3.style.animationDuration = "calc(1s/sp)"; 
            //console.log(value3.style.animationDuration)
            //console.log(i)
        }
        if(i >= 5 && i <= (num-5))
        {
            value1.style.animationDuration = "calc(0.5s/sp)";
            value2.style.animationDuration = "calc(0.5s/sp)";
            value3.style.animationDuration = "calc(0.5s/sp)"; 
            
            //console.log(i)
        }

        if(i > (num-5) && i<=(num-4))
        {
            value1.style.animationDuration = "calc(1s/sp)";
            value2.style.animationDuration = "calc(1s/sp)";
            value3.style.animationDuration = "calc(1s/sp)";
            //console.log(i)
        }

        if(i > (num-4) && i<=(num-2))
        {
            value1.style.animationDuration = "calc(5s/sp)";
            value2.style.animationDuration = "calc(5s/sp)";
            value3.style.animationDuration = "calc(5s/sp)";
            //console.log(i)
        }

        if(i > (num-2) && i<=(num-1))
        {
            value1.style.animationDuration = "calc(10s/sp)";
            value2.style.animationDuration = "calc(10s/sp)";
            value3.style.animationDuration = "calc(10s/sp)";
            //console.log(i)
        }
        /*if(i===num){

            clearInterval(animationId)
            console.log(animationId)
            
            value1.style.animationDuration = "calc(0s/sp)";
            value2.style.animationDuration = "calc(0s/sp)";
            value3.style.animationDuration = "calc(0s/sp)";
            console.log(i)
        }*/
        //i++;

        

        
  
    









/*inpSpeed.onchange = function(ev){
    console.log('value changed', ev.target.value)
    document.documentElement.style.setProperty('--speed',ev.target.value)
    updateAnimation(ev.target.value)
}*/