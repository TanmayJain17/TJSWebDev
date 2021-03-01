
    let tds = document.getElementsByClassName('td')
    let td1 = document.getElementById('td1')
    let td2 = document.getElementById('td2')
    let td3 = document.getElementById('td3')
    let td4 = document.getElementById('td4')
    let td5 = document.getElementById('td5')
    let td6 = document.getElementById('td6')
    let td7 = document.getElementById('td7')
    let td8 = document.getElementById('td8')
    let td9 = document.getElementById('td9')
    let select = document.getElementById('playerSelect')
    var counter = 1
    
    var x

select.onchange = function(ev){
        x = ev.target.value
        console.log('selection '+ x)
        select.onchange = null
    }

function checkMatchResult(){
        if(td1.innerText===td2.innerText && td1.innerText ===td3.innerText && (td1.innerText=='X' || td1.innerText =='O')){
            let val =td1.innerText
            td1.style.backgroundColor='aqua'
            td2.style.backgroundColor='aqua'
            td3.style.backgroundColor='aqua'
            setTimeout(()=>{
                if(val===x){
                    alert('Player 1 Wins')
                }
                else{
                    alert('Player 2 Wins')
                }
            },700)
        }
        if(td4.innerText===td5.innerText && td4.innerText ===td6.innerText && (td4.innerText=='X' || td4.innerText =='O')){
            let val =td4.innerText
            td4.style.backgroundColor='aqua'
            td5.style.backgroundColor='aqua'
            td6.style.backgroundColor='aqua'
            setTimeout(()=>{
                if(val===x){
                    alert('Player 1 Wins')
                }
                else{
                    alert('Player 2 Wins')
                }
            },700)
        }
        if(td7.innerText===td8.innerText && td7.innerText ===td9.innerText && (td7.innerText=='X' || td7.innerText =='O')){
            let val =td7.innerText
            td7.style.backgroundColor='aqua'
            td8.style.backgroundColor='aqua'
            td9.style.backgroundColor='aqua'

            setTimeout(()=>{
                if(val===x){
                    alert('Player 1 Wins')
                }
                else{
                    alert('Player 2 Wins')
                }
            },700)
        }
        if(td1.innerText===td4.innerText && td1.innerText ===td7.innerText && (td1.innerText=='X' || td1.innerText =='O')){
            let val =td1.innerText
            td1.style.backgroundColor='aqua'
            td4.style.backgroundColor='aqua'
            td7.style.backgroundColor='aqua'
            setTimeout(()=>{
                if(val===x){
                    alert('Player 1 Wins')
                }
                else{
                    alert('Player 2 Wins')
                }
            },700)
        }
        if(td2.innerText===td5.innerText && td2.innerText ===td8.innerText && (td2.innerText=='X' || td2.innerText =='O')){
            let val =td2.innerText
            td2.style.backgroundColor='aqua'
            td5.style.backgroundColor='aqua'
            td8.style.backgroundColor='aqua'
            setTimeout(()=>{
                if(val===x){
                    alert('Player 1 Wins')
                }
                else{
                    alert('Player 2 Wins')
                }
            },700)
        }
        if(td3.innerText===td6.innerText && td3.innerText ===td9.innerText && (td3.innerText=='X' || td3.innerText =='O')){
            let val =td3.innerText
            td3.style.backgroundColor='aqua'
            td6.style.backgroundColor='aqua'
            td9.style.backgroundColor='aqua'
            setTimeout(()=>{
                if(val===x){
                    alert('Player 1 Wins')
                }
                else{
                    alert('Player 2 Wins')
                }
            },700)
        }
        if(td1.innerText===td5.innerText && td1.innerText ===td9.innerText && (td1.innerText=='X' || td1.innerText =='O')){
            let val =td1.innerText
            td1.style.backgroundColor='aqua'
            td5.style.backgroundColor='aqua'
            td9.style.backgroundColor='aqua'
            setTimeout(()=>{
                if(val===x){
                    alert('Player 1 Wins')
                }
                else{
                    alert('Player 2 Wins')
                }
            },700)
        }
        if(td3.innerText===td5.innerText && td3.innerText ===td7.innerText && (td3.innerText=='X' || td3.innerText =='O')){
            let val =td3.innerText
            td3.style.backgroundColor='aqua'
            td5.style.backgroundColor='aqua'
            td7.style.backgroundColor='aqua'
            setTimeout(()=>{
                if(val===x){
                    alert('Player 1 Wins')
                }
                else{
                    alert('Player 2 Wins')
                }
            },700)
        }
        
    }


td1.onclick = function(){
        
        td1.onclick = null
        if(x === 'O'){
            if(counter %2 !=0){
                td1.innerText = 'O'
                counter++
                
            }
            else{
                td1.innerText = 'X'
                counter++
            }
        }
        else {
            if(counter %2 !=0){
                td1.innerText = 'X'
                counter++
            }
            else{
                td1.innerText = 'O'
                counter++
            }
        }

        if(counter >= 6){
            checkMatchResult()
        }
        
    }

td2.onclick = function(){
    
        td2.onclick = null
        if(x === 'O'){
            if(counter %2 !=0){
                td2.innerText = 'O'
                counter++
                
            }
            else{
                td2.innerText = 'X'
                counter++
            }
        }
        else{
            if(counter %2 !=0){
                td2.innerText = 'X'
                counter++
            }
            else{
                td2.innerText = 'O'
                counter++
            }
        }

        if(counter >= 6){
            checkMatchResult()
        }
        
    }

td3.onclick = function(){
    
        td3.onclick = null
        if(x === 'O'){
            if(counter %2 !=0){
                td3.innerText = 'O'
                counter++
                
            }
            else{
                td3.innerText = 'X'
                counter++
            }
        }
        else{
            if(counter %2 !=0){
                td3.innerText = 'X'
                counter++
            }
            else{
                td3.innerText = 'O'
                counter++
            }
        }

        if(counter >= 6){
            checkMatchResult()
        }
        
    }

td4.onclick = function(){
    
        td4.onclick = null
        if(x === 'O'){
            if(counter %2 !=0){
                td4.innerText = 'O'
                counter++
                
            }
            else{
                td4.innerText = 'X'
                counter++
            }
        }
        else{
            if(counter %2 !=0){
                td4.innerText = 'X'
                counter++
            }
            else{
                td4.innerText = 'O'
                counter++
            }
        }

        if(counter >= 6){
            checkMatchResult()
        }
        
    }

td5.onclick = function(){
    
        td5.onclick = null
        if(x === 'O'){
            if(counter %2 !=0){
                td5.innerText = 'O'
                counter++
                
            }
            else{
                td5.innerText = 'X'
                counter++
            }
        }
        else{
            if(counter %2 !=0){
                td5.innerText = 'X'
                counter++
            }
            else{
                td5.innerText = 'O'
                counter++
            }
        }

        if(counter >= 6){
            checkMatchResult()
        }
        
    }

td6.onclick = function(){
    
        td6.onclick = null
        if(x === 'O'){
            if(counter %2 !=0){
                td6.innerText = 'O'
                counter++
                
            }
            else{
                td6.innerText = 'X'
                counter++
            }
        }
        else{
            if(counter %2 !=0){
                td6.innerText = 'X'
                counter++
            }
            else{
                td6.innerText = 'O'
                counter++
            }
        }

        if(counter >= 6){
            checkMatchResult()
        }
        
    }

td7.onclick = function(){
    
        td7.onclick = null
        if(x === 'O'){
            if(counter %2 !=0){
                td7.innerText = 'O'
                counter++
                
            }
            else{
                td7.innerText = 'X'
                counter++
            }
        }
        else{
            if(counter %2 !=0){
                td7.innerText = 'X'
                counter++
            }
            else{
                td7.innerText = 'O'
                counter++
            }
        }

        if(counter >= 6){
            checkMatchResult()
        }
        
    }

td8.onclick = function(){
    
        td8.onclick = null
        if(x === 'O'){
            if(counter %2 !=0){
                td8.innerText = 'O'
                counter++
                
            }
            else{
                td8.innerText = 'X'
                counter++
            }
        }
        else{
            if(counter %2 !=0){
                td8.innerText = 'X'
                counter++
            }
            else{
                td8.innerText = 'O'
                counter++
            }
        }

        if(counter >= 6){
            checkMatchResult()
        }
        
    }

td9.onclick = function(){
    
        td9.onclick = null
        if(x === 'O'){
            if(counter %2 !=0){
                td9.innerText = 'O'
                counter++
                
            }
            else{
                td9.innerText = 'X'
                counter++
            }
        }
        else{
            if(counter %2 !=0){
                td9.innerText = 'X'
                counter++
            }
            else{
                td9.innerText = 'O'
                counter++
            }
        }

        if(counter >= 6){
            checkMatchResult()
        }
        
    }

    
   
    
  /*  function printXO(ev){
        if(counter <= 9){
            
             if(ev.target == td2){
                td2.onclick=null
                if(x === 'O'){
                    if(counter %2 !=0){
                        td2.innerText = 'O'
                        counter++
                    }
                    else{
                        td2.innerText = 'X'
                        counter++
                    }
                }
                else{
                    if(counter %2 !=0){
                        td2.innerText = 'X'
                        counter++
                    }
                    else{
                        td2.innerText = 'O'
                        counter++
                    }
                }

                if(counter >= 6){
                    checkMatchResult()
                }
            }
            else if(ev.target == td3){
                td3.onclick=null
                if(x === 'O'){
                    if(counter %2 !=0){
                        td3.innerText = 'O'
                        counter++
                    }
                    else{
                        td3.innerText = 'X'
                        counter++
                    }
                }
                else{
                    if(counter %2 !=0){
                        td3.innerText = 'X'
                        counter++
                    }
                    else{
                        td3.innerText = 'O'
                        counter++
                    }
                }
                if(counter >= 6){
                    checkMatchResult()
                }
            }
            if(ev.target == td4){
                td4.onclick=null
                if(x === 'O'){
                    if(counter %2 !=0){
                        td4.innerText = 'O'
                        counter++
                    }
                    else{
                        td4.innerText = 'X'
                        counter++
                    }
                }
                else{
                    if(counter %2 !=0){
                        td4.innerText = 'X'
                        counter++
                    }
                    else{
                        td4.innerText = 'O'
                        counter++
                    }
                }
                if(counter >= 6){
                    checkMatchResult()
                }
            }
            if(ev.target == td5){
                td5.onclick=null
                if(x === 'O'){
                    if(counter %2 !=0){
                        td5.innerText = 'O'
                        counter++
                    }
                    else{
                        td5.innerText = 'X'
                        counter++
                    }
                }
                else{
                    if(counter %2 !=0){
                        td5.innerText = 'X'
                        counter++
                    }
                    else{
                        td5.innerText = 'O'
                        counter++
                    }
                }
                if(counter >= 6){
                    checkMatchResult()
                }
            }
            if(ev.target == td6){
                td6.onclick=null
                if(x === 'O'){
                    if(counter %2 !=0){
                        td6.innerText = 'O'
                        counter++
                    }
                    else{
                        td6.innerText = 'X'
                        counter++
                    }
                }
                else{
                    if(counter %2 !=0){
                        td6.innerText = 'X'
                        counter++
                    }
                    else{
                        td6.innerText = 'O'
                        counter++
                    }
                }
                if(counter >= 6){
                    checkMatchResult()
                }
            }
            if(ev.target == td7){
                td7.onclick=null
                if(x === 'O'){
                    if(counter %2 !=0){
                        td7.innerText = 'O'
                        counter++
                    }
                    else{
                        td7.innerText = 'X'
                        counter++
                    }
                }
                else{
                    if(counter %2 !=0){
                        td7.innerText = 'X'
                        counter++
                    }
                    else{
                        td7.innerText = 'O'
                        counter++
                    }
                }
                if(counter >= 6){
                    checkMatchResult()
                }
            }
            if(ev.target == td8){
                td8.onclick=null
                if(x === 'O'){
                    if(counter %2 !=0){
                        td8.innerText = 'O'
                        counter++
                    }
                    else{
                        td8.innerText = 'X'
                        counter++
                    }
                }
                else{
                    if(counter %2 !=0){
                        td8.innerText = 'X'
                        counter++
                    }
                    else{
                        td8.innerText = 'O'
                        counter++
                    }
                }
                if(counter >= 6){
                    checkMatchResult()
                }
            }
            if(ev.target == td9){
                td9.onclick=null
                if(x === 'O'){
                    if(counter %2 !=0){
                        td9.innerText = 'O'
                        counter++
                    }
                    else{
                        td9.innerText = 'X'
                        counter++
                    }
                }
                else{
                    if(counter %2 !=0){
                        td9.innerText = 'X'
                        counter++
                    }
                    else{
                        td9.innerText = 'O'
                        counter++
                    }
                }
                if(counter >= 6){
                    checkMatchResult()
                }
            }
        }
        
        
        
        
    }*/
    
    //document.addEventListener('click',printXO)

    
    




