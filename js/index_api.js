$(document).ready(function(){
    if(window.localStorage.getItem('authToken')!=null){
        window.location.replace('./categories.html')
    }
   
    $('#login').submit(function(e){
        event.preventDefault()
        var data={}
       data.email=$("#email").val()
       data.password=$("#password").val()
       console.log(JSON.stringify(data))

        $.ajax({
            type:'POST',
            data:JSON.stringify(data),
            contentType:'application/json',
            url:'http://localhost:3000/login',
            success:function(res){
                const data=res
                console.log(data)
                console.log(data.role)
                if(data.success==true && data.role=="user"){
                    window.localStorage.setItem('authToken',data.token)
                    window.localStorage.setItem('username',data.username)
                     window.location.replace('./categories.html')
                }
                if(data.success==true && data.role=="admin"){
                    window.localStorage.setItem('authToken',data.token)
                    window.localStorage.setItem('username',data.username)
                     window.location.replace('./adminpanel.html')
                }
                

                
               
               
            }
        })
       
    })
})