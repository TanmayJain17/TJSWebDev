
function doSomething(done){
   
     console.log('1. doing something')
     done()
}

doSomething(()=>{
    console.log('2.still doing')
})

console.log('3 end')