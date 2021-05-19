function getUserName(){
    let username  = window.localStorage.user ? JSON.parse(window.localStorage.user) : null;
    if(!username){
        $.post('/api/users',(user)=>{
            
            username = user
            window.localStorage.user = JSON.stringify(username)
            let name = username.username
            $('#username').text(name)
            
        })
    }
    else{
        let name = username.username
        $('#username').text(name)
    }
   
}
getUserName()