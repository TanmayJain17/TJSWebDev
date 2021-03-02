function sayHello(name){

    console.log('Hello '+ name)

}
console.log(module.exports)
//module.exports = sayHello()  (this also works)
module.exports = {sayHello}
console.log(module.exports)
setTimeout(()=>{
    module.exports.omg = 'wow'
},1000)
setTimeout(()=>{
    console.log(module.exports)
},1500)