let str=('abssds')      //3 levels from null
let num=5               //3 levels from null
let bool=true           //3 levels from null
let arr=[1,2,3]         //3 levels from null
let obj={x:1,y:"fgg"}   //2 levels from null
let fun                 //3 levels from null
{console.log("yay!")}

console.log('=======types=======')

console.log('type of String',typeof String)
console.log('type of Number',typeof Number)
console.log('type of Boolean',typeof Boolean)
console.log('type of Array',typeof Array)
console.log('type of Function',typeof Function)

//everything inherits from the same thing
//that obj is inherited from
//i.e in js everything is essentially an object

console.log('======proto chain=======')
console.log(str.__proto__.__proto__==obj.__proto__)
console.log(num.__proto__.__proto__==obj.__proto__)
console.log(arr.__proto__.__proto__==obj.__proto__)
console.log(bool.__proto__.__proto__==obj.__proto__)

console.log('=====prototype=====')
console.log(obj.__proto__==Object.prototype)
console.log(num.__proto__==Number.prototype)
console.log(str.__proto__==String.prototype)
console.log(arr.__proto__==Array.prototype)
console.log(bool.__proto__==Boolean.prototype)

//String.prototype inherits from Object.protype
//type of Object.create(Boolean.prototype)--?

Array.prototype.joinOrignal=Array.prototype.join
Array.prototype.join=function(){
    console.log('join called on ',this)
    return this.joinOrignal(...arguments)
}


