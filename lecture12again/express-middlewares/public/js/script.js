let txtCode = document.getElementById('txtCode')
let btnEncode = document.getElementById('btnEncode')
let code = document.getElementById('code')


btnEncode.onclick = function(){
    let data = txtCode.value
    data = btoa(data)
    code.value = data
    
}

