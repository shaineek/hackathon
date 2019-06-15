$(document).ready(function(){

    if(window.localStorage.getItem('authToken')==null){
        window.location.replace('./index.html')
    }

    $("#logout").click(function(){
        window.localStorage.removeItem('authToken');
        window.location.replace('./index.html')
    })

    var data='';
    $.ajax({
        type:'GET',
        // data:JSON.stringify(data),
        contentType:'application/json',
        url:'http://localhost:3000/category',
        success:function(res){
             data=res
             console.log(data)
            if(data[0].name=="Science")
            {
                console.log(typeof data[0]._id)
            }  
        }

    })
    $("#Science").click(function(){
        // console.log(data)
        var cname=data.filter(c=>c.name=="Science");
        console.log(cname[0].name)
        window.localStorage.setItem('categoryName',cname[0].name)
        window.localStorage.setItem('categoryId',cname[0]._id)
        window.location.replace('./quiz.html')
    })

})