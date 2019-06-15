
$(document).ready(function(){
    console.log('testing')
    if(window.localStorage.getItem('authToken')==null){
        window.location.replace('./index.html')
    }

    $("#logout").click(function(){
        window.localStorage.removeItem('authToken');
        window.location.replace('./index.html')
    })

    var correct = parseInt(window.localStorage.getItem('correct'))
    // console.log(typeof correct)
    var incorrect = parseInt(window.localStorage.getItem('incorrect'))
    var score=((correct)/(correct+incorrect))*100
    $("#username").html(`<p>Username : ${window.localStorage.getItem('username')}</p>`)
    $("#category_name").html(`<p>Category Name : ${window.localStorage.getItem('categoryName')}</p>`)
    $("#marks").html(`${score} %`)
})