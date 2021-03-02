const lib1 = require('./lib1')
//console.log('Hello World')
if(this.window){
    console.log('running in browser')
    sayHello('Tanmay')

}
else{
    console.log('running in node')
}

console.log(lib1)
lib1.sayHello('Gajodhar')

setTimeout(()=>{

    console.log(lib1)

    const lib1_new = require('./lib1')   //this time the node will not require the file twice 
                                        //it requires the file only once and the second time
                                        // it reads the file from the memory (previously read data)

    console.log(lib1_new )
},2000)