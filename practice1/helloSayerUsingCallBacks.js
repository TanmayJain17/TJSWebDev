function helloSayer(count , name,doneSaying){
    let times=0
    let loopId = setInterval(()=>{
        times++
        if(times <= count){
            console.log('Hello '+name)
        }
        else{
            clearInterval(loopId)
            doneSaying()
        }
    },100)

}

helloSayer(3 , 'Tanmay',()=>{
    helloSayer(2,'Bhakt',()=>{})
})
