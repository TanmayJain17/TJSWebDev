function helloSayer(count , name){
    return new Promise((resolve,reject)=>{
        let times=0
        let loopId = setInterval(()=>{
        times++
        if(times <= count){
            console.log('Hello '+name)
        }
        else{
            clearInterval(loopId)
            resolve()
        }
    },100)
 })
    

}

helloSayer(3 , 'Tanmay')
.then(()=>{helloSayer(2, 'Bhakt')})
.then(()=>{helloSayer(3,'XYZ')})