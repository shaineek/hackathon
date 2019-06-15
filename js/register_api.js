$(document).ready(function(){
    $("#register").submit(function(){
        event.preventDefault();
        var data={}
        data.username=$("#username").val()
        data.email=$("#email").val()
        data.password=$("#password").val()
       console.log(JSON.stringify(data));
        $.ajax({
            type:'POST',
            data:JSON.stringify(data),
            contentType:'application/json',
            url:'http://localhost:3000/register',
            success:function(res){
                const data=res
                console.log(data)
                if(data.message=="User Created"){
                    window.location.replace('./index.html')
                }

                 
               
               
            }
        })
       
    })
    })
