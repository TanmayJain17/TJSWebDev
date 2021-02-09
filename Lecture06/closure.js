function outer(arg1){
    let x=44
    let var1=10
    function inner( arg2){
        let var2=30
        console.log(arg1,var1,arg2,var2,var3)

        function innerinnner(arg3){
            let var5=28
            let x=37
            console.log(arguments[0],arg3,x,arg2)

        }
        return innerinnner
    }

    return inner
     
}


let x=outer('param1')
var3=25


//typeof x===function

let y=x('param2')
y('param3')