function justthis(){
    console.log(this)
}
justthis()

let obj={
    x:100,
    y:200,
    z:'hello',
    d:function()
    {
        console.log(this)
    }
}