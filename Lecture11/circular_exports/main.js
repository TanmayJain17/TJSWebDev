const lib1 = require('./lib1.js')
const lib2 = require('./lib2.js')

console.log(lib1)    //{ a: 10, lib2: { b: 20, lib1: {} } }
                    //{ b: 20, lib1: {} }
console.log(lib2)

console.log(lib1.lib2)
console.log(lib2.lib1)